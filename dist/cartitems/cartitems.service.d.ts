import { CreateCartitemDto } from './dto/create-cartitem.dto';
import { UpdateCartitemDto } from './dto/update-cartitem.dto';
import { CartItem } from './entities/cartitem.entity';
import { Repository } from 'typeorm';
export declare class CartitemsService {
    private cartItemsRepository;
    constructor(cartItemsRepository: Repository<CartItem>);
    create(createCartitemDto: CreateCartitemDto): Promise<CartItem>;
    findAll(): Promise<CartItem[]>;
    findOne(id: number): string;
    update(id: number, updateCartitemDto: UpdateCartitemDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
