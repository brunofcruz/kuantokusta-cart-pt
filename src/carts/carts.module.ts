import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { Cart } from './entities/cart.entity';
import { CartItem } from 'src/cartitems/entities/cartitem.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Cart]), CartItem],
  controllers: [CartsController],
  providers: [CartsService],
  exports:[TypeOrmModule]
})
export class CartsModule {}
