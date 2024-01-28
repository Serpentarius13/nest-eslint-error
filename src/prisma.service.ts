import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(@Inject(REQUEST) private request: any) {
    super({
      log: ['query'],
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
