import {
  OnQueueCompleted,
  OnQueueError,
  OnQueueFailed,
  OnQueuePaused,
  OnQueueProgress,
  OnQueueRemoved,
  OnQueueStalled,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';
import { PrismaService } from 'src/prisma.service';
import { RestyService } from 'src/resty/resty.service';

@Processor({ name: 'queue' })
export class ExportQueue {
  constructor(
    private readonly resty: RestyService,
    private readonly prismaService: PrismaService,
  ) {}

  @Process()
  async export(job) {
    const result = this.resty.hello();

    const res = await this.prismaService.post.count();
    console.log(res);
    console.log(result);
    throw new Error('Error!');
  }

  @OnQueueFailed()
  async onError(job: Job, err: Error) {
    console.log('[QUEUE | EXPORT ERROR]', err);
  }

  @OnQueueError()
  async onErr() {
    console.log('queue errored');
  }

  @OnQueueRemoved()
  async onRemoved() {
    console.log('queue was removed');
  }

  @OnQueueCompleted()
  async onCompleted() {
    console.log('queue was completed');
  }

  @OnQueuePaused()
  async onPaused() {
    console.log('queue was paused');
  }

  @OnQueueProgress()
  async onProgress(job: Job, progress: number) {
    console.log(`queue progress: ${progress}`);
  }

  @OnQueueStalled()
  async onStalled() {
    console.log(`queue stalled`);
  }
}
