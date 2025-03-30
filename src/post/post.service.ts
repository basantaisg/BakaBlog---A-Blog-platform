import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  async getPosts() {
    return this.prisma.post.findMany({ include: { User: true } });
  }

  async getPostById(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
      include: { User: true },
    });
  }
}
