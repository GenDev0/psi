// user_project_role.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserRoleProject {
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
