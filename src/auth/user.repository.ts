import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';

export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  // Custom methods in the repo...

  // Get all users
  // async getUsers(): Promise<User[]> {
  //   const query = this.userRepository.createQueryBuilder('user');

  //   const users = await query.getMany();
  //   return users;
  // }

  //Sign Up new user
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {
      first_name,
      last_name,
      password,
      email,
      profilPicture,
      matricule,
      fonction,
      deleted,
    } = authCredentialsDto;
    // initiate new User entity
    const user = new User();
    // isert username
    user.first_name = first_name;
    user.last_name = last_name;
    user.profilPicture = profilPicture;
    user.matricule = matricule;
    user.fonction = fonction;
    user.deleted = deleted;
    // isert username
    user.email = email;
    // prepare unique salt per user
    user.salt = await bcrypt.genSalt();
    // hash password with unique salt
    user.password = await this.hashPassword(password, user.salt);
    console.log(user);

    try {
      // insert user into DB
      await user.save();
    } catch (error) {
      // throw error in case of duplicate or else...
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Username already exists !');
      } else {
        console.log(error);

        throw new InternalServerErrorException();
      }
    }
  }

  //Password Validation for user
  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ email: string }> {
    //roles: Role[]
    const { password, email } = authCredentialsDto;
    // find user from DB
    const user = await this.userRepository.findOneBy({ email });
    // check if user exist and the password is valid
    if (user && (await user.validatePassword(password))) {
      // Get User roles

      return {
        email: user.email,
      };
    } else {
      return null;
    }
  }

  // // Update User
  // // Update a user
  // async updateUser(
  //   id: number,
  //   updateCredentialsDto: UpdateCredentialsDto,
  // ): Promise<{ accessToken: string }> {
  //   const { fullname, password, email } = updateCredentialsDto;
  //   // find user from DB
  //   const user = await this.userRepository.findOneBy({ id });
  //   if (fullname) {
  //     user.fullname = fullname;
  //   }
  //   if (password) {
  //     // prepare unique salt per user
  //     user.salt = await bcrypt.genSalt();
  //     // hash password with unique salt
  //     user.password = await this.hashPassword(password, user.salt);
  //   }
  //   if (email) {
  //     user.email = email;
  //   }

  //   await user.save();
  //   // payload for token
  //   const payload = { fullname, email };
  //   // create an access token for user
  //   const accessToken = await this.jwtService.signAsync(payload);
  //   return { accessToken };
  // }

  // Hash user Password
  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
