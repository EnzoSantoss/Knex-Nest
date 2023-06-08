import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UserService as UserRepositories } from 'src/repositories/user/user.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly userRepositories: UserRepositories) {}
  async create(createUsuarioDto: any) {
    console.log(createUsuarioDto);
    try {
      await this.userRepositories.createUser(createUsuarioDto);
    } catch (e) {
      console.log(e);
      return 'erro';
    }
  }

  async findAll() {
    return await this.userRepositories.getAllUsers();
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
