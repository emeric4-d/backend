import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { User } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}


  async findAll(): Promise<User[]> {
    console.log('produit trouver merci');
    return await this.usersRepository.find();
  }
  async createUser(data): Promise<User> {
    
  return await this.usersRepository.save(data);   
}
}
