import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRoleProject } from 'src/user-role-project/entities/user-role-project.entity';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  first_name: string;
  @Column()
  last_name: string;

  @Column()
  profilPicture: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  fonction: string;

  @Column()
  matricule: string;

  @Column()
  deleted: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => UserRoleProject, (userRoleProject) => userRoleProject.user)
  userRoleProjects: UserRoleProject[];

  // Validate existing hashed password with input hashed password
  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
