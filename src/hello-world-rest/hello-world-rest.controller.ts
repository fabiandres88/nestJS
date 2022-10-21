import { Controller, Get } from '@nestjs/common';

@Controller('hello-world-rest')
export class HelloWorldRestController {
    @Get()
    getHelloWorld(): string {
        return "Hello world rest";
    }

    @Get("dice")
    getRandomNumber(): number {
        return 10;
    }
}
