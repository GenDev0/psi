import { Role } from 'src/roles/entities/role.entity';

export interface JwtPayload {
  email: string;
  // roles: Role[];
}
