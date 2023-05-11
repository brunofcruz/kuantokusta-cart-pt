import { PartialType } from '@nestjs/mapped-types';
import { CreateCartitemDto } from './create-cartitem.dto';

export class DeleteCartitemDto extends PartialType(CreateCartitemDto) {
    itemid:number;
}
