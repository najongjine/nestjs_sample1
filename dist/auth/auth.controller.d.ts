import { NextFunction } from 'express';
export declare class AuthController {
    login(req: any, res: any): Promise<any>;
    wronglogin(req: any): Promise<{
        success: boolean;
        user: any;
        message: string;
    }>;
    logout(req: any, res: any, next: NextFunction): Promise<{
        success: boolean;
        user: null;
        message: string;
    } | undefined>;
    loggedOnly(req: any, res: any): Promise<any>;
    getCurrentUser(req: any): {
        success: boolean;
        user: any;
        message: string;
    };
}
