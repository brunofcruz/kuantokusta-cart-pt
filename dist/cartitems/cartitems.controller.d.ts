import { CartitemsService } from './cartitems.service';
import { CreateCartitemDto } from './dto/create-cartitem.dto';
import { CartItem } from './entities/cartitem.entity';
export declare class CartitemsController {
    private readonly cartitemsService;
    constructor(cartitemsService: CartitemsService);
    create(createCartitemDto: CreateCartitemDto): Promise<CartItem>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
