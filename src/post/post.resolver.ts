import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './model/post.model';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  // Get posts!
  @Query(() => [Post])
  async getPosts() {
    return this.postService.getPosts();
  }

  // get post by id!
  @Query(() => Post)
  async getPostById(@Args('id') id: string) {
    return this.postService.getPostById(id);
  }

  // create post!
  @Mutation(() => Post)
  async createPost(@Args('input') input: CreatePostDto) {
    return this.postService.createPost(input);
  }

  // update post!
  @Mutation(() => Post)
  async updatePost(@Args('input') input: UpdatePostDto) {
    return this.postService.updatePost(input.id, input);
  }

  //  delete post!
  @Mutation(() => Post)
  async deletePost(@Args('id') id: string) {
    return this.postService.deletePost(id);
  }
}
