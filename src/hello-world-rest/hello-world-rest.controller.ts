import { Controller, Get, Query } from '@nestjs/common';
import { getRandomNumber } from 'src/common/helpers/getRandomNumber';

@Controller('hello-world-rest')
export class HelloWorldRestController {
  @Get()
  getHelloWorld(): string {
    return 'Hello world rest';
  }

  @Get('dice')
  getRandomNumber(@Query('max') max: number = 8): number {
    return getRandomNumber(max);
  }
}
