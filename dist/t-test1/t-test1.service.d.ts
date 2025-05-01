import { Repository } from 'typeorm';
import { TTest1 } from '../entities/TTest1';
export declare class TTest1Service {
    private readonly tTest1Repository;
    constructor(tTest1Repository: Repository<TTest1>);
    create(data: Partial<TTest1>): Promise<TTest1>;
    findAll(): Promise<TTest1[]>;
    findOne(id: number): Promise<TTest1>;
    update(id: number, data: Partial<TTest1>): Promise<TTest1>;
    remove(id: number): Promise<void>;
}
