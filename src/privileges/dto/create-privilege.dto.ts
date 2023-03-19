import { Action } from './../../Action/action.enum';
import {
  ArrayContains,
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsIn,
  IsInstance,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';

export class CreatePrivilegeDto {
  @IsNotEmpty()
  privilege_name: string;

  @IsNotEmpty()
  @IsIn([
    Action.Create,
    Action.Delete,
    Action.Manage,
    Action.Read,
    Action.Update,
  ])
  privilege_type: string;

  @IsNotEmpty()
  privilege_subject: string;
}
