"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TTest1Module = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const TTest1_1 = require("../entities/TTest1");
const t_test1_service_1 = require("./t-test1.service");
const t_test1_controller_1 = require("./t-test1.controller");
let TTest1Module = class TTest1Module {
};
exports.TTest1Module = TTest1Module;
exports.TTest1Module = TTest1Module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([TTest1_1.TTest1])],
        providers: [t_test1_service_1.TTest1Service],
        controllers: [t_test1_controller_1.TTest1Controller],
    })
], TTest1Module);
//# sourceMappingURL=t-test1.module.js.map