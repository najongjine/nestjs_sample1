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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const local_auth_guard_1 = require("./strategies/local-auth.guard");
const auth_guard_1 = require("./strategies/auth.guard");
const custHttp_exception_filter_1 = require("./strategies/custHttp-exception.filter");
let AuthController = class AuthController {
    async login(req, res) {
        try {
            return res.json({
                success: true,
                user: req?.user,
                message: 'Login successful',
            });
        }
        catch (error) {
            return res.json({
                success: false,
                user: null,
                message: `!!!(auth.controller login) ${error?.message ?? ''}`,
            });
        }
    }
    async wronglogin(req) {
        try {
            return { success: true, user: req?.user, message: 'Login successful' };
        }
        catch (error) {
            return {
                success: false,
                user: null,
                message: `!!!(auth.controller login) ${error?.message ?? ''}`,
            };
        }
    }
    async logout(req, res, next) {
        try {
            req.logout(function (err) {
                if (err) {
                    return next(err);
                }
                res.json({
                    success: true,
                    user: null,
                    message: 'Logout successful',
                });
            });
        }
        catch (error) {
            return {
                success: false,
                user: null,
                message: `!!!(auth.controller logout) ${error?.message ?? ''}`,
            };
        }
    }
    async loggedOnly(req, res) {
        if (!req.isAuthenticated()) {
            return res.json({
                success: false,
                data: null,
                message: 'not authorized',
            });
        }
        return res.json({
            success: true,
            data: req?.user,
            message: 'You are authorized',
        });
    }
    getCurrentUser(req) {
        if (req.isAuthenticated()) {
            let user = req?.user;
            if (!user?.id)
                throw new Error('no_user_info');
            if (user?.password)
                user.password = '';
            return {
                success: true,
                user: user,
                message: 'userinfo_provided',
            };
        }
        else {
            return {
                success: false,
                user: null,
                message: 'Not_authenticated',
            };
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Get)('wronglogin'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "wronglogin", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.LoggedInGuard),
    (0, common_1.Get)('loggedOnly'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loggedOnly", null);
__decorate([
    (0, common_1.Get)('current-user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getCurrentUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(custHttp_exception_filter_1.HttpExceptionFilter)
], AuthController);
//# sourceMappingURL=auth.controller.js.map