import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRolePrivilegeDto } from './dto/create-role-privilege.dto';
import { RolePrivilege } from './entities/role-privilege.entity';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Role } from 'src/roles/entities/role.entity';

export class RolePrivilegeRepository extends Repository<RolePrivilege> {
  constructor(
    @InjectRepository(RolePrivilege)
    private rolePrivilegeRepository: Repository<RolePrivilege>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Privilege)
    private privilegeRepository: Repository<Privilege>,
  ) {
    super(
      rolePrivilegeRepository.target,
      rolePrivilegeRepository.manager,
      rolePrivilegeRepository.queryRunner,
    );
  }

  // Custom methods in the repo...

  // Assign a  Privilege to a role
  async assignPrivilegeRole(roleId: number, privilegeId: number) {
    const role = await this.roleRepository.findOneBy({ id: roleId });
    const privilege = await this.privilegeRepository.findOneBy({
      id: privilegeId,
    });
    const rolePrivilege = new RolePrivilege();
    rolePrivilege.role = role;
    rolePrivilege.privilege = privilege;
    rolePrivilege.createdBy = '1';
    await rolePrivilege.save();
    return rolePrivilege;
  }
}
