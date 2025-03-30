import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  //   create a new post!
  async createPost(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  //   get all post with user information!
  async getPosts() {
    return this.prisma.post.findMany({ include: { user: true } });
  }

  //   get a post by id with user information!
  async getPostById(post_id: string) {
    return this.prisma.post.findUnique({
      where: { post_id },
      include: { user: true },
    });
  }

  //   update a post by it's id
  async updatePost(post_id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { post_id },
      data: updatePostDto,
    });
  }

  // deleting a user by its id
  async deletePost(post_id: string) {
    return this.prisma.post.delete({
      where: { post_id },
    });
  }
}
