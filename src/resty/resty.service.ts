import { Injectable } from '@nestjs/common';

@Injectable()
export class RestyService {
  hello() {
    return 'hello';
  }
}
