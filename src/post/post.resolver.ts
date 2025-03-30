import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class PostResolver {
  @Query(() => String)
  helloPost() {
    return 'Hello, Post!';
  }
}
