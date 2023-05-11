import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Repository  } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartsService {

  constructor(
  @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>
    ){}

  //createCartDto recebe um objeto do tipo CreateCartDto que é a classe que replica o modelo da entidade Cart
  async create(createCartDto: CreateCartDto):Promise<Cart> {
    return this.cartsRepository.save(createCartDto)
  }

  
  findAll(): Promise<Cart[]> {
    return this.cartsRepository.find();
  }

  findOne(id: number) {
    return ''
   //return this.cartsRepository.delete(id);
  }

  //Construindo uma query personalizada que retorna os dados do carrinho
  async getCartData(id:number)
  {
    const queryCart = this.cartsRepository.createQueryBuilder('cart')
    
    .where('cart.cartid = :cartid', {cartid: id})
    .leftJoinAndSelect('cart.products', 'item')
    .groupBy('cart.cartid')
    .addGroupBy('item.itemid')
    const resultCart = await queryCart.getOne()
    console.log(resultCart)

    return resultCart
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return this.cartsRepository.delete(id);
  }
}
