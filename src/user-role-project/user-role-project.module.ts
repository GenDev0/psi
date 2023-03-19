import { Module } from '@nestjs/common';
import { UserRoleProjectService } from './user-role-project.service';
import { UserRoleProjectController } from './user-role-project.controller';

@Module({
  controllers: [UserRoleProjectController],
  providers: [UserRoleProjectService]
})
export class UserRoleProjectModule {}
