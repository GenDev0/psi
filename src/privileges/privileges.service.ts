import { Injectable } from '@nestjs/common';
import { CreatePrivilegeDto } from './dto/create-privilege.dto';
import { UpdatePrivilegeDto } from './dto/update-privilege.dto';
import { Privilege } from './entities/privilege.entity';
import { PrivilegeRepository } from './privilege.repository';

@Injectable()
export class PrivilegesService {
  constructor(private readonly privilegeRepository: PrivilegeRepository) {}

  //create a new Privilege
  async createPrivilege(
    createPrivilegeDto: CreatePrivilegeDto,
  ): Promise<Privilege> {
    return this.privilegeRepository.createPrivilege(createPrivilegeDto);
  }

  // findAll() {
  //   return `This action returns all privileges`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} privilege`;
  // }

  // update(id: number, updatePrivilegeDto: UpdatePrivilegeDto) {
  //   return `This action updates a #${id} privilege`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} privilege`;
  // }
}
