import { Project } from 'src/projects/entities/project.entity';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/auth/entities/user.entity';
import { Module } from '@nestjs/common';
import { UserRoleProjectService } from './user-role-project.service';
import { UserRoleProjectController } from './user-role-project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleProject } from './entities/user-role-project.entity';
import { RolePrivilegeRepository } from 'src/role-privilege/role-privilege.repository';
import { UserRoleProjectRepository } from './user-role-project.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleProject, User, Role, Project])],
  controllers: [UserRoleProjectController],
  providers: [UserRoleProjectService, UserRoleProjectRepository],
})
export class UserRoleProjectModule {}
