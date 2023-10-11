/* eslint-disable prettier/prettier */
import { Body,Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import  {randomUUID} from "node:crypto"
import { CreateTeamMemberBodyDto } from './dtos/create-teeam-member-body';
@Controller()
export class AppController {
  constructor (private prisma: PrismaService) {}
  @Get("hello")
  async getHello(@Body() body: CreateTeamMemberBodyDto) {
    const {name, "function": memberFunction} = body
    const member = await this.prisma.rocketTeamMenber.create ({
      data: {
        id: randomUUID (),
        name: `Capital zap`,
        function: `coisas leves`,
      },
    });
    return  {
      hello: member
    }
  }
}
