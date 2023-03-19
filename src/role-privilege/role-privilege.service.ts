import { CreateRolePrivilegeDto } from './dto/create-role-privilege.dto';
import { Injectable } from '@nestjs/common';
import { PrivilegeRepository } from 'src/privileges/privilege.repository';
import { RoleRepository } from 'src/roles/role.repository';
import { RolePrivilegeRepository } from './role-privilege.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolePrivilegeService {
  constructor(
    private readonly rolePrivilegeRepository: RolePrivilegeRepository,
  ) {}

  async assignPrivilegeRole(roleId: number, privilegeId: number) {
    return this.rolePrivilegeRepository.assignPrivilegeRole(
      roleId,
      privilegeId,
    );
  }

  // findAll() {
  //   return `This action returns all rolePrivilege`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} rolePrivilege`;
  // }

  // update(id: number, updateRolePrivilegeDto: UpdateRolePrivilegeDto) {
  //   return `This action updates a #${id} rolePrivilege`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} rolePrivilege`;
  // }
}
