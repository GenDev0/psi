import { Module } from '@nestjs/common';
import { RolePrivilegeService } from './role-privilege.service';
import { RolePrivilegeController } from './role-privilege.controller';

@Module({
  controllers: [RolePrivilegeController],
  providers: [RolePrivilegeService]
})
export class RolePrivilegeModule {}
