import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { ProjectsModule } from './projects/projects.module';
import { PrivilegesModule } from './privileges/privileges.module';
import { UserRoleProjectModule } from './user-role-project/user-role-project.module';

@Module({
  imports: [AuthModule, RolesModule, ProjectsModule, PrivilegesModule, UserRoleProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
