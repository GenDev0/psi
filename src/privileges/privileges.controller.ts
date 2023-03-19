import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PrivilegesService } from './privileges.service';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';
import { Privilege } from './entities/privilege.entity';
import { PrivilegeValidationPipe } from './pipe/privilege-validation.pipe';

@Controller('privileges')
export class PrivilegesController {
  constructor(private readonly privilegesService: PrivilegesService) {}

  // Create a new Privilege
  @Post()
  @UsePipes(ValidationPipe)
  createPrivilege(
    @Body(PrivilegeValidationPipe) createPrivilegeDto: CreatePrivilegeDto,
  ): Promise<Privilege> {
    return this.privilegesService.createPrivilege(createPrivilegeDto);
  }

  // @Get()
  // findAll() {
  //   return this.privilegesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.privilegesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePrivilegeDto: UpdatePrivilegeDto) {
  //   return this.privilegesService.update(+id, updatePrivilegeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.privilegesService.remove(+id);
  // }
}
