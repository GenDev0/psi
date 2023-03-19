import { UserRoleProject } from 'src/user-role-project/entities/user-role-project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, nullable: true })
  projectIcon: string;

  @Column({ length: 100, nullable: true })
  projectDescription: string;

  @Column({ length: 100, nullable: true })
  projectPicture: string;

  @Column()
  deleted: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => UserRoleProject,
    (userRoleProject) => userRoleProject.project,
  )
  userRoleProjects: UserRoleProject[];
}
