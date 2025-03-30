import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID) // -> ID makes id as a unique identifier!
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;
}
