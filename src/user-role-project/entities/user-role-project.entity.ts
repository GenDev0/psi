// user_project_role.entity.ts

import { User } from 'src/auth/entities/user.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class UserRoleProject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userRoleProjects)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Project, (project) => project.userRoleProjects)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @ManyToOne(() => Role, (role) => role.userRoleProjects)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
