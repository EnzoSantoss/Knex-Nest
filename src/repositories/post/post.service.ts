import { Injectable } from '@nestjs/common';
import { Connect } from '../connection';

@Injectable()
export class PostService {
  async createPost(data: any) {
    console.log(data);
    try {
      await Connect('post').insert(data);
    } catch (e) {
      console.log(e);
      return 'erro';
    }
  }
}
