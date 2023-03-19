import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  roleName: string;

  @IsNotEmpty()
  roleDescription: string;
}
