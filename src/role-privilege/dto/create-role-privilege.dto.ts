import { IsNotEmpty, IsOptional } from 'class-validator';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Role } from 'src/roles/entities/role.entity';

export class CreateRolePrivilegeDto {
  @IsNotEmpty()
  role: Role;

  @IsNotEmpty()
  privilege: Privilege;

  @IsOptional()
  createdBy: string;
}
