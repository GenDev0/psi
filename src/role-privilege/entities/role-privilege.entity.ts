import { Privilege } from 'src/privileges/entities/privilege.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RolePrivilege {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Role, (role) => role.rolePrivileges, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Privilege, (privilege) => privilege.rolePrivileges, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'privilege_id' })
  privilege: Privilege;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'created_by' })
  createdBy: number;
}
