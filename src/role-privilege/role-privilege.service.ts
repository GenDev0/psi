import { Injectable } from '@nestjs/common';
import { CreateRolePrivilegeDto } from './dto/create-role-privilege.dto';
import { UpdateRolePrivilegeDto } from './dto/update-role-privilege.dto';

@Injectable()
export class RolePrivilegeService {
  create(createRolePrivilegeDto: CreateRolePrivilegeDto) {
    return 'This action adds a new rolePrivilege';
  }

  findAll() {
    return `This action returns all rolePrivilege`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolePrivilege`;
  }

  update(id: number, updateRolePrivilegeDto: UpdateRolePrivilegeDto) {
    return `This action updates a #${id} rolePrivilege`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolePrivilege`;
  }
}
