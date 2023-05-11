import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    create(createCartDto: CreateCartDto): Promise<void | Cart>;
    findAll(): Promise<Cart[]>;
    getCartData(id: number): Promise<Cart>;
    update(id: string, updateCartDto: UpdateCartDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
