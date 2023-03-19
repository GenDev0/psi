import { PipeTransform, BadRequestException } from '@nestjs/common';
import { Action } from 'src/Action/action.enum';

export class PrivilegeValidationPipe implements PipeTransform {
  readonly allowedPrivileges = [
    Action.Create,
    Action.Delete,
    Action.Manage,
    Action.Read,
    Action.Update,
  ];
  transform(value: any) {
    if (!this.isPrivilageValid(value.privilege_type)) {
      throw new BadRequestException(
        `"${value.privileges}" is an invalid status`,
      );
    }

    return value;
  }
  private isPrivilageValid(privilege: any) {
    // let arr = privilege.split(',');
    // let found = false;
    // if (arr.length <= this.allowedPrivileges.length) {
    //   found = arr.every((r) => this.allowedPrivileges.includes(r));
    // } else {
    //   found = false;
    // }
    const found = this.allowedPrivileges.includes(privilege);

    return found;
  }
}
