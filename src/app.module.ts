import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsModule } from './carts/carts.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Cart } from './carts/entities/cart.entity';
import { CartitemsModule } from './cartitems/cartitems.module';
import { CartItem } from './cartitems/entities/cartitem.entity';


//Imports deve conter todas as configuração do banco de dados
// A entidade Cart deve ser adicionada no escopo da conexao

@Module({
  imports: [CartsModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'Alice!23',
    database: 'kuantokusta_cart',
    host: 'vps44214.publiccloud.com.br',
    entities: [Cart, CartItem],
    synchronize: true,
  }),
  CartitemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
