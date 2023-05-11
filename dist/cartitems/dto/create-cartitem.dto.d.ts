import { Cart } from "src/carts/entities/cart.entity";
export declare class CreateCartitemDto {
    itemid: number;
    productid: number;
    qt: number;
    value: number;
    cartid: Cart;
}
