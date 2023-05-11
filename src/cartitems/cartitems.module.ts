import { Module } from '@nestjs/common';
import { CartitemsService } from './cartitems.service';
import { CartitemsController } from './cartitems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItem } from './entities/cartitem.entity';


@Module({
  imports:[TypeOrmModule.forFeature([CartItem])],
  controllers: [CartitemsController],
  providers: [CartitemsService],
  exports:[TypeOrmModule]
})
export class CartitemsModule {}
