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
exports.TTest1Service = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const TTest1_1 = require("../entities/TTest1");
const common_2 = require("@nestjs/common");
let TTest1Service = class TTest1Service {
    tTest1Repository;
    constructor(tTest1Repository) {
        this.tTest1Repository = tTest1Repository;
    }
    async create(data) {
        const entity = await this.tTest1Repository.create(data);
        return this.tTest1Repository.save(entity);
    }
    async findAll() {
        return await this.tTest1Repository.find();
    }
    async findOne(id) {
        const entity = await this.tTest1Repository.findOne({ where: { id } });
        if (!entity) {
            throw new common_2.NotFoundException(`!!! TTest1 with id ${id} not found`);
        }
        return entity;
    }
    async update(id, data) {
        let data2 = await this.tTest1Repository.findOne({ where: { id: 1 } }) ?? new TTest1_1.TTest1();
        await this.tTest1Repository.update(id, data2);
        return this.findOne(id);
    }
    async remove(id) {
        await this.tTest1Repository.delete(id);
    }
};
exports.TTest1Service = TTest1Service;
exports.TTest1Service = TTest1Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(TTest1_1.TTest1)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TTest1Service);
//# sourceMappingURL=t-test1.service.js.map