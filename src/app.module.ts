import { Module } from '@nestjs/common';
import { HelloWorldRestModule } from './hello-world-rest/hello-world-rest.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { HelloWorldGraphqlModule } from './hello-world-graphql/hello-world-graphql.module';

@Module({
  imports: [
    HelloWorldRestModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    HelloWorldGraphqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
