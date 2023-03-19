import { Role } from 'src/roles/entities/role.entity';

export interface JwtPayload {
  fullname: string;
  email: string;
  roles: Role[];
}
