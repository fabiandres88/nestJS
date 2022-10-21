import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldGraphqlResolver {
    @Query(() => String, { name: "message" })
    getHelloWorld(): string {
        return "Hello world graph-ql";
    }

    @Query(() => Number, { name: "randomDice" })
    getRandomNmber(): number {
        return 10;
    }
}
