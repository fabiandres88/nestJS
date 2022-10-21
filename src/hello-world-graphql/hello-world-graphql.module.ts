import { Module } from '@nestjs/common';
import { HelloWorldGraphqlResolver } from './hello-world-graphql.resolver';

@Module({
  controllers: [],
  providers: [HelloWorldGraphqlResolver]
})
export class HelloWorldGraphqlModule {}
