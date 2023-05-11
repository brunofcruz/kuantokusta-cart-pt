import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartitemsService } from './cartitems.service';
import { CreateCartitemDto } from './dto/create-cartitem.dto';
import { UpdateCartitemDto } from './dto/update-cartitem.dto';
import { CartItem } from './entities/cartitem.entity';

@Controller('cartitems')
export class CartitemsController {
  constructor(private readonly cartitemsService: CartitemsService) {}

  @Post('add-item')
  async create(@Body() createCartitemDto: CreateCartitemDto):Promise<CartItem> {
    return this.cartitemsService.create(createCartitemDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: number) {
    return this.cartitemsService.remove(id);
  }

  /*

  As rotas abaixo form construídas via nest g resource
  Não as deletei para ficarem como exemplo

  @Get()
  findAll() {
    return this.cartitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartitemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartitemDto: UpdateCartitemDto) {
    return this.cartitemsService.update(+id, updateCartitemDto);
  }
*/

  
}
