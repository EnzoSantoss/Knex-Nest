import { Injectable } from '@nestjs/common';
import { Connect } from '../connection';

@Injectable()
export class UserService {
  async createUser(data: any) {
    console.log(data);
    try {
      await Connect('user').insert(data);
      return 'ok';
    } catch (e) {
      console.log(e);
      return 'erro';
    }
  }

  async getAllUsers() {
    try {
      const result = await Connect('user')
        .leftJoin('post', 'user.id_user', 'post.id_user')
        .leftJoin('address', 'user.id_user', 'address.id_user')
        .select(
          'user.*',
          'post.id_post',
          'post.post',
          'post.create_time as post_create_time',
          'address.id_address',
          'address.address',
        )
        .orderBy('post_create_time', 'asc');

      return result;
    } catch (e) {
      console.log(e);
      return 'erro';
    }
  }
}
