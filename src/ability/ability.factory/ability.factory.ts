import { Project } from 'src/projects/entities/project.entity';
import {
  AbilityBuilder,
  ExtractSubjectType,
  InferSubjects,
  MongoAbility,
  createMongoAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/entities/user.entity';
import { Privilege } from 'src/privileges/entities/privilege.entity';
import { RolePrivilege } from 'src/role-privilege/entities/role-privilege.entity';
import { Role } from 'src/roles/entities/role.entity';
import { UserRoleProject } from 'src/user-role-project/entities/user-role-project.entity';
import { Action } from 'src/Action/action.enum';

export type Subjects =
  | InferSubjects<
      | typeof Project
      | typeof User
      | typeof Role
      | typeof Privilege
      | typeof RolePrivilege
      | typeof UserRoleProject
    >
  | 'all';
export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbility(user: User) {
    //define rules
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(
      createMongoAbility,
    );
    console.log(user);

    //define rules
    can(Action.Read, Project);

    return build({
      // Read https://casl.js.org/v6/en/guide/subject-type-detection for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
