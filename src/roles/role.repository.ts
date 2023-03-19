import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';

export class RoleRepository extends Repository<Role> {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {
    super(
      roleRepository.target,
      roleRepository.manager,
      roleRepository.queryRunner,
    );
  }

  // Custom methods in the repo...

  //Get All(byfiltre) roles
  // async getRoles(filterRoleDto: getRolesFilterDto): Promise<Role[]> {
  //   const { search } = filterRoleDto;
  //   const query = this.roleRepository.createQueryBuilder('role');

  //   if (search) {
  //     query.andWhere(
  //       '(role.title Like :search OR role.description Like :search)',
  //       {
  //         search: `%${search}%`,
  //       },
  //     );
  //   }

  //   const roles = await query.getMany();
  //   return roles;
  // }

  // create a new Role
  async createRole(createRolekDto: CreateRoleDto): Promise<Role> {
    const { roleName, roleDescription, roleIcon, deleted } = createRolekDto;
    const role = new Role();
    role.roleName = roleName;
    role.roleDescription = roleDescription;
    role.roleIcon = roleIcon;
    role.deleted = deleted;

    await role.save();

    return role;
  }
}
