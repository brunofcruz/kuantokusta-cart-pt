"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartitemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cartitem_entity_1 = require("./entities/cartitem.entity");
const typeorm_2 = require("typeorm");
let CartitemsService = class CartitemsService {
    constructor(cartItemsRepository) {
        this.cartItemsRepository = cartItemsRepository;
    }
    async create(createCartitemDto) {
        return this.cartItemsRepository.save(createCartitemDto);
    }
    findAll() {
        return this.cartItemsRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} cartitem`;
    }
    update(id, updateCartitemDto) {
        return `This action updates a #${id} cartitem`;
    }
    remove(id) {
        return this.cartItemsRepository.delete(id);
    }
};
CartitemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cartitem_entity_1.CartItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CartitemsService);
exports.CartitemsService = CartitemsService;
//# sourceMappingURL=cartitems.service.js.map