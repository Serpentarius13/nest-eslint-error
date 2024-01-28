import { InjectQueue } from '@nestjs/bull';
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('rest')
export class RestController {
  constructor(@InjectQueue('queue') private queue: Queue) {}

  @Get()
  getrest() {
    this.queue.add('');

    return 'Hello world';
  }
}
