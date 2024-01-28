import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RestyService } from 'src/resty/resty.service';
import { ExportQueue } from './app.queue';
import { RestController } from './rest.controller';

@Module({
  controllers: [RestController],
  imports: [
    BullModule.registerQueue({
      name: 'queue',
    }),
  ],
  providers: [ExportQueue, RestyService, PrismaService],
})
export class RestModule {}
