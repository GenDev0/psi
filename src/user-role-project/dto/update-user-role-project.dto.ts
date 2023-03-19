import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRoleProjectDto } from './create-user-role-project.dto';

export class UpdateUserRoleProjectDto extends PartialType(CreateUserRoleProjectDto) {}
