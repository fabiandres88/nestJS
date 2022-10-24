import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { type } from 'os';
import { getRandomNumber } from 'src/common/helpers/getRandomNumber';

@Resolver()
export class HelloWorldGraphqlResolver {
  @Query(() => String, { name: 'message' })
  getHelloWorld(): string {
    return 'Hello world graph-ql';
  }

  @Query(() => Int, {
    name: 'randomDice',
    description: 'this field has the dice value',
  })
  getRandomNmber(@Args('max', { type: () => Int, nullable: true }) max: number = 6): number {
    return getRandomNumber(6);
  }
}
