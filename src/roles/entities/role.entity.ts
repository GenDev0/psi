import { RolePrivilege } from 'src/role-privilege/entities/role-privilege.entity';
import { UserRoleProject } from 'src/user-role-project/entities/user-role-project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role_name' })
  roleName: string;

  @Column({ name: 'role_icon', nullable: true })
  roleIcon: string;

  @Column({ name: 'role_description', nullable: true })
  roleDescription: string;

  @Column()
  deleted: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => RolePrivilege, (rolePrivilege) => rolePrivilege.role)
  rolePrivileges: RolePrivilege[];

  @OneToMany(() => UserRoleProject, (userRoleProject) => userRoleProject.role)
  userRoleProjects: UserRoleProject[];
}
