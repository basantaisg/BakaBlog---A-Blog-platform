import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserDto {
  @Field()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  content?: string;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  userId?: string;
}
