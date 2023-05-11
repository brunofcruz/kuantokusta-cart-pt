import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';



@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  //O parâmetro passado dentro de @Post() determina a uri do recurso. Neste caso, new
  @Post('new')
  async create(@Body() createCartDto: CreateCartDto):Promise<void|Cart> {
    return this.cartsService.create(createCartDto);
  }

  @Get('list')
  findAll() {
    return this.cartsService.findAll();
  }

  /*
  @Get('search/:id')
  findOne(@Param('id') id: string) {


    return this.cartsService.findOne(+id);
  }
*/

  @Get('search/:id')
  async getCartData(@Param('id') id:number)
  {
    return this.cartsService.getCartData(id)
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartsService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsService.remove(+id);
  }
}
