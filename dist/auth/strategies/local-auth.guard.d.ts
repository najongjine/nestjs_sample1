import { ExecutionContext } from '@nestjs/common';
declare const LocalAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class LocalAuthGuard extends LocalAuthGuard_base {
    handleRequest(err: any, user: any, info: any): any;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
