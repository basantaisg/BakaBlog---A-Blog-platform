import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { createUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  // Get users!
  @Query(() => [User])
  async getUsers() {
    return this.userService.getUsers();
  }

  // Get user by id!
  @Query(() => User)
  async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  // create user!

  @Mutation(() => User)
  async createUser(@Args('input') input: createUserDto) {
    return this.userService.createUser(input);
  }

  // update User!

  @Mutation(() => User)
  async updateUser(@Args('updateInput') updateInput: UpdateUserDto) {
    return this.userService.updateUser(updateInput.id, updateInput);
  }

  // delete user!
  @Mutation(() => User)
  async deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
