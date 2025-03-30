import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/model/user.model';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field(() => User)
  user: User;
}
