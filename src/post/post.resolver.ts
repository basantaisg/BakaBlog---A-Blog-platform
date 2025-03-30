import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './model/post.model';
import { CreatePostDto } from './dto/create-post.dto';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => [Post])
  async getPosts() {
    return this.postService.getPosts();
  }

  @Query(() => Post)
  async getPostById(@Args('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Mutation(() => Post)
  async createPost(@Args('input') input: CreatePostDto) {
    return this.postService.createPost(input);
  }
}
