import { Controller, Post, Body, ParseIntPipe } from '@nestjs/common';
import { RolePrivilegeService } from './role-privilege.service';

@Controller('role-privilege')
export class RolePrivilegeController {
  constructor(private readonly rolePrivilegeService: RolePrivilegeService) {}

  @Post()
  assignPrivilegeRole(
    @Body('roleId', ParseIntPipe) roleId: number,
    @Body('privilegeId', ParseIntPipe) privilegeId: number,
  ) {
    return this.rolePrivilegeService.assignPrivilegeRole(roleId, privilegeId);
  }

  // @Get()
  // findAll() {
  //   return this.rolePrivilegeService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.rolePrivilegeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRolePrivilegeDto: UpdateRolePrivilegeDto) {
  //   return this.rolePrivilegeService.update(+id, updateRolePrivilegeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rolePrivilegeService.remove(+id);
  // }
}
