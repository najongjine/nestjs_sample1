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
exports.TTest1Controller = void 0;
const common_1 = require("@nestjs/common");
const t_test1_service_1 = require("./t-test1.service");
let TTest1Controller = class TTest1Controller {
    tTest1Service;
    constructor(tTest1Service) {
        this.tTest1Service = tTest1Service;
    }
    async create(data) {
        try {
            let createdData = await this.tTest1Service.create(data);
            return { success: true, data: createdData, msg: '' };
        }
        catch (error) {
            return { success: false, data: null, msg: error?.message };
        }
    }
    async findAll() {
        try {
            let data = await this.tTest1Service.findAll();
            return { success: true, data: data, msg: '' };
        }
        catch (error) {
            return { success: false, data: null, msg: error?.message };
        }
    }
    async findOne(id) {
        try {
            let data = await this.tTest1Service.findOne(id);
            return { success: true, data: data, msg: '' };
        }
        catch (error) {
            return { success: false, data: null, msg: error?.message };
        }
    }
    async update(id, data) {
        try {
            let updatedData = await this.tTest1Service.update(id, data);
            return { success: true, data: updatedData, msg: '' };
        }
        catch (error) {
            return { success: false, data: null, msg: error?.message };
        }
        return;
    }
    async remove(id) {
        try {
            await this.tTest1Service.remove(id);
            return { success: true, data: null, msg: '' };
        }
        catch (error) {
            return { success: false, data: null, msg: error?.message };
        }
    }
};
exports.TTest1Controller = TTest1Controller;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TTest1Controller.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TTest1Controller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TTest1Controller.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TTest1Controller.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TTest1Controller.prototype, "remove", null);
exports.TTest1Controller = TTest1Controller = __decorate([
    (0, common_1.Controller)('t-test1'),
    __metadata("design:paramtypes", [t_test1_service_1.TTest1Service])
], TTest1Controller);
//# sourceMappingURL=t-test1.controller.js.map