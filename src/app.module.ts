import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { RestModule } from './rest/rest.module';
import { RestyService } from './resty/resty.service';

@Module({
  imports: [
    RestModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RestyService, PrismaService],
})
export class AppModule {}
