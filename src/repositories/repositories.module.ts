import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { AddressService } from './address/address.service';
import { PostService } from './post/post.service';

@Module({
  providers: [UserService, AddressService, PostService],
  exports: [UserService, AddressService, PostService],
})
export class RepositoriesModule {}
