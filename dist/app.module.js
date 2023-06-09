"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const carts_module_1 = require("./carts/carts.module");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("./carts/entities/cart.entity");
const cartitems_module_1 = require("./cartitems/cartitems.module");
const cartitem_entity_1 = require("./cartitems/entities/cartitem.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [carts_module_1.CartsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                port: 5432,
                username: 'postgres',
                password: 'Alice!23',
                database: 'kuantokusta_cart',
                host: 'vps44214.publiccloud.com.br',
                entities: [cart_entity_1.Cart, cartitem_entity_1.CartItem],
                synchronize: true,
            }),
            cartitems_module_1.CartitemsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map