"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsModule = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/typeorm/dist");
const carts_service_1 = require("./carts.service");
const carts_controller_1 = require("./carts.controller");
const cart_entity_1 = require("./entities/cart.entity");
const cartitem_entity_1 = require("../cartitems/entities/cartitem.entity");
let CartsModule = class CartsModule {
};
CartsModule = __decorate([
    (0, common_1.Module)({
        imports: [dist_1.TypeOrmModule.forFeature([cart_entity_1.Cart]), cartitem_entity_1.CartItem],
        controllers: [carts_controller_1.CartsController],
        providers: [carts_service_1.CartsService],
        exports: [dist_1.TypeOrmModule]
    })
], CartsModule);
exports.CartsModule = CartsModule;
//# sourceMappingURL=carts.module.js.map