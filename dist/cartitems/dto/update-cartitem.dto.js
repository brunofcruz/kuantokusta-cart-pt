"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartitemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cartitem_dto_1 = require("./create-cartitem.dto");
class UpdateCartitemDto extends (0, mapped_types_1.PartialType)(create_cartitem_dto_1.CreateCartitemDto) {
}
exports.UpdateCartitemDto = UpdateCartitemDto;
//# sourceMappingURL=update-cartitem.dto.js.map