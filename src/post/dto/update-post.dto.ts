import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreatePostDto } from './create-post.dto';

@InputType()
export class UpdatePostDto extends PartialType(CreatePostDto) {
  @Field()
  post_id: string;
}
