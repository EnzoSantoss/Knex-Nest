import { Body, Controller, Get, Post } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';

@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Post()
  async create(@Body() userDto: any) {
    return await this.repositoriesService.createUser(userDto);
  }

  @Post('post')
  async createPost(@Body() postDto: any) {
    return await this.repositoriesService.createPost(postDto);
  }

  @Post('endereco')
  async createAddress(@Body() postDto: any) {
    return await this.repositoriesService.createAddress(postDto);
  }

  @Get()
  async getAllUsers() {
    return await this.repositoriesService.getAllUsers();
  }
}
