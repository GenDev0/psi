import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { Privilege } from './entities/privilege.entity';

export class PrivilegeRepository extends Repository<Privilege> {
  constructor(
    @InjectRepository(Privilege)
    private privilegeRepository: Repository<Privilege>,
  ) {
    super(
      privilegeRepository.target,
      privilegeRepository.manager,
      privilegeRepository.queryRunner,
    );
  }

  // Custom methods in the repo...

  //Get All(byfiltre) Privileges
  // async getPrivileges(
  //   filterPrivilegeDto: getPrivilegesFilterDto,
  // ): Promise<Privilege[]> {
  //   const { search } = filterPrivilegeDto;
  //   const query = this.privilegeRepository.createQueryBuilder('privilege');

  //   if (search) {
  //     query.andWhere('privilege.privileges && :search', { search });
  //   }

  //   const privileges = await query.getMany();
  //   return privileges;
  // }

  // create a new Privilege
  async createPrivilege(
    createPrivilegeDto: CreatePrivilegeDto,
  ): Promise<Privilege> {
    const { privilege_name, privilege_type, privilege_subject } =
      createPrivilegeDto;
    const privilege = new Privilege();
    privilege.privilege_name = privilege_name;
    privilege.privilege_type = privilege_type;
    privilege.privilege_subject = privilege_subject;

    await privilege.save();

    return privilege;
  }
}
