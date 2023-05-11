import { CreateCartitemDto } from './create-cartitem.dto';
declare const DeleteCartitemDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCartitemDto>>;
export declare class DeleteCartitemDto extends DeleteCartitemDto_base {
    itemid: number;
}
export {};
