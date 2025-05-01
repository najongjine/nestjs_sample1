import { TTest1Service } from './t-test1.service';
import { TTest1 } from '../entities/TTest1';
export declare class TTest1Controller {
    private readonly tTest1Service;
    constructor(tTest1Service: TTest1Service);
    create(data: Partial<TTest1>): Promise<{
        success: boolean;
        data: TTest1;
        msg: string;
    } | {
        success: boolean;
        data: null;
        msg: any;
    }>;
    findAll(): Promise<{
        success: boolean;
        data: TTest1[];
        msg: string;
    } | {
        success: boolean;
        data: null;
        msg: any;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        data: TTest1;
        msg: string;
    } | {
        success: boolean;
        data: null;
        msg: any;
    }>;
    update(id: number, data: Partial<TTest1>): Promise<{
        success: boolean;
        data: TTest1;
        msg: string;
    } | {
        success: boolean;
        data: null;
        msg: any;
    } | undefined>;
    remove(id: number): Promise<{
        success: boolean;
        data: null;
        msg: any;
    }>;
}
