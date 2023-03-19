import { Module } from '@nestjs/common';
import { RolePrivilegeService } from './role-privilege.service';
import { RolePrivilegeController } from './role-privilege.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePrivilege } from './entities/role-privilege.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolePrivilege])],
  controllers: [RolePrivilegeController],
  providers: [RolePrivilegeService],
})
export class RolePrivilegeModule {}
