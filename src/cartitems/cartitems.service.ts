import { Injectable } from '@nestjs/common';
import { CreateCartitemDto } from './dto/create-cartitem.dto';
import { UpdateCartitemDto } from './dto/update-cartitem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from './entities/cartitem.entity';
import { Repository } from 'typeorm';
import { DeleteCartitemDto } from './dto/delete-cartitem.dto';

@Injectable()
export class CartitemsService {

  constructor(
    @InjectRepository(CartItem)
    private cartItemsRepository: Repository<CartItem>
  ){}

  async create(createCartitemDto: CreateCartitemDto):Promise<CartItem> {
    return this.cartItemsRepository.save(createCartitemDto);
    //return this.cartsRepository.save(createCartDto)
  }

  findAll(): Promise<CartItem[]> {
    return this.cartItemsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cartitem`;
  }

  update(id: number, updateCartitemDto: UpdateCartitemDto) {
    return `This action updates a #${id} cartitem`;
  }

  remove(id: number){
    return this.cartItemsRepository.delete(id)
  }
}
