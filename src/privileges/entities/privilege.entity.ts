import { RolePrivilege } from 'src/role-privilege/entities/role-privilege.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Privilege {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  privilege_name: string;

  @Column()
  privilege_type: string;

  @Column()
  privilege_subject: string;

  @Column()
  delete: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => RolePrivilege, (rolePrivilege) => rolePrivilege.privilege)
  rolePrivileges: RolePrivilege[];
}
