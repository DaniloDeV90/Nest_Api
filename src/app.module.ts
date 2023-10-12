/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { rocket_member_repository } from './rrepositories/rocket-members-repository';

import { prismaRocketMemberRepository } from './rrepositories/prisma/primsa-rocket-memberrepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, {
    provide: rocket_member_repository,

    useClass: prismaRocketMemberRepository
  }],
})
export class AppModule {}
