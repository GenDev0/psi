import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/auth/entities/user.entity';
import { Project } from 'src/projects/entities/project.entity';
import { UserRoleProject } from './entities/user-role-project.entity';

export class UserRoleProjectRepository extends Repository<UserRoleProject> {
  constructor(
    @InjectRepository(UserRoleProject)
    private userRoleProjectRepository: Repository<UserRoleProject>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(
      userRoleProjectRepository.target,
      userRoleProjectRepository.manager,
      userRoleProjectRepository.queryRunner,
    );
  }

  // Custom methods in the repo...

  // Assign a  Privilege to a role
  async assignUserRoleProject(
    roleId: number,
    projectId: number,
    userId: number,
  ) {
    const role = await this.roleRepository.findOneBy({ id: roleId });
    const project = await this.projectRepository.findOneBy({
      id: projectId,
    });
    const user = await this.userRepository.findOneBy({
      id: userId,
    });
    const userRolePrivilege = new UserRoleProject();
    userRolePrivilege.role = role;
    userRolePrivilege.user = user;
    userRolePrivilege.project = project;

    await userRolePrivilege.save();
    return userRolePrivilege;
  }
}
