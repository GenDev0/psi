import { Module } from '@nestjs/common';
import { PrivilegesService } from './privileges.service';
import { PrivilegesController } from './privileges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Privilege } from './entities/privilege.entity';
import { PrivilegeRepository } from './privilege.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Privilege])], //, AuthModule
  controllers: [PrivilegesController],
  providers: [PrivilegesService, PrivilegeRepository],
})
export class PrivilegesModule {}
