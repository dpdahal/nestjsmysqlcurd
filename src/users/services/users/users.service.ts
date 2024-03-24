import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async show(id: number): Promise<User[]> {
    return this.usersRepository.findBy({ id });
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(id: number, user: User) {
    await this.usersRepository.update(id, user);
  }

  async delete(id: number) {
    await this.usersRepository.delete(id);
    return HttpStatus.OK;
  }
}
