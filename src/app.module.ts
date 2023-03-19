import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { ProjectsModule } from './projects/projects.module';
import { PrivilegesModule } from './privileges/privileges.module';
import { UserRoleProjectModule } from './user-role-project/user-role-project.module';
import { RolePrivilegeModule } from './role-privilege/role-privilege.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    RolesModule,
    ProjectsModule,
    PrivilegesModule,
    UserRoleProjectModule,
    RolePrivilegeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
