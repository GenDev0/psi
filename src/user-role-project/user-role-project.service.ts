import { Injectable } from '@nestjs/common';
import { CreateUserRoleProjectDto } from './dto/create-user-role-project.dto';
import { UpdateUserRoleProjectDto } from './dto/update-user-role-project.dto';

@Injectable()
export class UserRoleProjectService {
  create(createUserRoleProjectDto: CreateUserRoleProjectDto) {
    return 'This action adds a new userRoleProject';
  }

  findAll() {
    return `This action returns all userRoleProject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRoleProject`;
  }

  update(id: number, updateUserRoleProjectDto: UpdateUserRoleProjectDto) {
    return `This action updates a #${id} userRoleProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRoleProject`;
  }
}
