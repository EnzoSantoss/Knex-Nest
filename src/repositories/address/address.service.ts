import { Injectable } from '@nestjs/common';
import { Connect } from '../connection';

@Injectable()
export class AddressService {
  async createAddress(data: any) {
    try {
      await Connect('address').insert(data);
    } catch (e) {
      console.log(e);
      return 'erro';
    }
  }
}
