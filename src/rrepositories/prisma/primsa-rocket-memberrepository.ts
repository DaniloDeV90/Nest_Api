/* eslint-disable prettier/prettier */
import { PrismaService } from "src/database/prisma.service";
import { Injectable } from "@nestjs/common";
import { rocket_member_repository } from "../rocket-members-repository";
import { randomUUID } from "node:crypto";

@Injectable()
export class prismaRocketMemberRepository implements rocket_member_repository {
  constructor(private prisma: PrismaService) {}
  async addMember(name: string, memberFunction: string): Promise<void> {

    await this.prisma.rocketTeamMenber.create({
      data: {
        function: memberFunction,
        id: randomUUID(),
        name,
      },
    });
    }
}