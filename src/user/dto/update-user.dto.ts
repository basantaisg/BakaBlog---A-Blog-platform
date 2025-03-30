import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, MinLength } from 'class-validator';

@InputType()
export class UpdateUserDto {
  @Field()
  @IsOptional()
  username?: string;

  @Field()
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field()
  @IsOptional()
  @MinLength(8)
  password?: string;
}
