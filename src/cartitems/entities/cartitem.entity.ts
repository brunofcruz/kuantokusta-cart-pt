import { Cart } from "src/carts/entities/cart.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({name: 'cartitem'}) //Setando a tabela específica
export class CartItem {
    
    @PrimaryGeneratedColumn()
    itemid: number;

    @Column()
    productid:number;

    @Column()
    qt:number;

    @Column({nullable: false})
    value:number;

    @ManyToOne((type) => Cart, (cartID) => cartID.products)
    cartid: Cart

}