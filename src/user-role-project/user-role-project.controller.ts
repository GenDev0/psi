import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserRoleProjectService } from './user-role-project.service';
import { CreateUserRoleProjectDto } from './dto/create-user-role-project.dto';
import { UpdateUserRoleProjectDto } from './dto/update-user-role-project.dto';

@Controller('user-role-project')
export class UserRoleProjectController {
  constructor(
    private readonly userRoleProjectService: UserRoleProjectService,
  ) {}

  @Post()
  assignUserRoleProject(
    @Body('roleId', ParseIntPipe) roleId: number,
    @Body('projectId', ParseIntPipe) projectId: number,
    @Body('userId', ParseIntPipe) userId: number,
  ) {
    return this.userRoleProjectService.assignUserRoleProject(
      roleId,
      projectId,
      userId,
    );
  }

  // @Post()
  // create(@Body() createUserRoleProjectDto: CreateUserRoleProjectDto) {
  //   return this.userRoleProjectService.create(createUserRoleProjectDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userRoleProjectService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userRoleProjectService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserRoleProjectDto: UpdateUserRoleProjectDto) {
  //   return this.userRoleProjectService.update(+id, updateUserRoleProjectDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userRoleProjectService.remove(+id);
  // }
}
