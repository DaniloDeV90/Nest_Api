/* eslint-disable prettier/prettier */
import { Body,Controller, Get } from '@nestjs/common';


import { rocket_member_repository } from './rrepositories/rocket-members-repository';
import { CreateTeamMemberBodyDto } from './dtos/create-teeam-member-body';
@Controller()
export class AppController {
  constructor (private prisma: rocket_member_repository) {}
  @Get("hello")
  async getHello(@Body() body: CreateTeamMemberBodyDto) {
    const {name, "function": memberFunction} = body
    const member = await this.prisma.addMember (name,memberFunction)
    return  {
      hello: member
    }
  }
}
