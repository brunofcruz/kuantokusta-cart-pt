"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartitemsModule = void 0;
const common_1 = require("@nestjs/common");
const cartitems_service_1 = require("./cartitems.service");
const cartitems_controller_1 = require("./cartitems.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cartitem_entity_1 = require("./entities/cartitem.entity");
let CartitemsModule = class CartitemsModule {
};
CartitemsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cartitem_entity_1.CartItem])],
        controllers: [cartitems_controller_1.CartitemsController],
        providers: [cartitems_service_1.CartitemsService],
        exports: [typeorm_1.TypeOrmModule]
    })
], CartitemsModule);
exports.CartitemsModule = CartitemsModule;
//# sourceMappingURL=cartitems.module.js.map