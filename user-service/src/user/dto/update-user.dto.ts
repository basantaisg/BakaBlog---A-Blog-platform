import { Field, InputType, PartialType } from '@nestjs/graphql';
import { createUserDto } from './create-user.dto';

@InputType()
export class UpdateUserDto extends PartialType(createUserDto) {
  @Field()
  id: string;
}

//  this makes allowing optional to all the field except the id field!
