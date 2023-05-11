
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { CartItem } from "src/cartitems/entities/cartitem.entity";

//Criando a classe do carrinho de compras com os dados esperados 
//no database

@Entity({name: 'cart'}) //O parâmetro name define o nome da tabela de onde os dados serão persistidos/consultados
export class Cart {
    @PrimaryGeneratedColumn()
    cartid:number

    @Column()
    userid:number;
    
    @OneToMany((type) => CartItem, item => item.cartid) //declarando o relacionamento entre as tabelas
    products:CartItem[]
    
}


