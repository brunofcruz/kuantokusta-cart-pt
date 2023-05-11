import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
export declare class CartsService {
    private cartsRepository;
    constructor(cartsRepository: Repository<Cart>);
    create(createCartDto: CreateCartDto): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findOne(id: number): string;
    getCartData(id: number): Promise<Cart>;
    update(id: number, updateCartDto: UpdateCartDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
