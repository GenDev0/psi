import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Module } from '@nestjs/common';
import { RolePrivilegeService } from './role-privilege.service';
import { RolePrivilegeController } from './role-privilege.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePrivilege } from './entities/role-privilege.entity';
import { RolePrivilegeRepository } from './role-privilege.repository';
import { Role } from 'src/roles/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolePrivilege, Role, Privilege])],
  controllers: [RolePrivilegeController],
  providers: [RolePrivilegeService, RolePrivilegeRepository],
})
export class RolePrivilegeModule {}
