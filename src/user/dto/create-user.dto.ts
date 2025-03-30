import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class createUserDto {
  @Field()
  @IsNotEmpty()
  username: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
