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
exports.CartitemsController = void 0;
const common_1 = require("@nestjs/common");
const cartitems_service_1 = require("./cartitems.service");
const create_cartitem_dto_1 = require("./dto/create-cartitem.dto");
let CartitemsController = class CartitemsController {
    constructor(cartitemsService) {
        this.cartitemsService = cartitemsService;
    }
    async create(createCartitemDto) {
        return this.cartitemsService.create(createCartitemDto);
    }
    remove(id) {
        return this.cartitemsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)('add-item'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cartitem_dto_1.CreateCartitemDto]),
    __metadata("design:returntype", Promise)
], CartitemsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CartitemsController.prototype, "remove", null);
CartitemsController = __decorate([
    (0, common_1.Controller)('cartitems'),
    __metadata("design:paramtypes", [cartitems_service_1.CartitemsService])
], CartitemsController);
exports.CartitemsController = CartitemsController;
//# sourceMappingURL=cartitems.controller.js.map