import { Cart } from "src/carts/entities/cart.entity";

export class CreateCartitemDto {
    itemid: number;
    productid:number;
    qt:number;
    value:number;
    cartid: Cart;
}
