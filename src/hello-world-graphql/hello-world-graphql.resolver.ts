import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldGraphqlResolver {
    @Query(() => String)
    getHelloWorld(): string {
        return "Hello world graph-ql";
    }
}
