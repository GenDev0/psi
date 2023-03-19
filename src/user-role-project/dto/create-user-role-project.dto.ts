import { IsNotEmpty } from 'class-validator';
import { User } from 'src/auth/entities/user.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Role } from 'src/roles/entities/role.entity';

export class CreateUserRoleProjectDto {
  @IsNotEmpty()
  role: Role;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  project: Project;
}
