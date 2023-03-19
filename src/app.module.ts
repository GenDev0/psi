import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { ProjectsModule } from './projects/projects.module';
import { PrivilegesModule } from './privileges/privileges.module';

@Module({
  imports: [AuthModule, RolesModule, ProjectsModule, PrivilegesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
