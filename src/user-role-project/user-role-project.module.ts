import { Module } from '@nestjs/common';
import { UserRoleProjectService } from './user-role-project.service';
import { UserRoleProjectController } from './user-role-project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleProject } from './entities/user-role-project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleProject])],
  controllers: [UserRoleProjectController],
  providers: [UserRoleProjectService],
})
export class UserRoleProjectModule {}
