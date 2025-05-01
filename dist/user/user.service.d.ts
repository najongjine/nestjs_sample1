import { Repository } from 'typeorm';
import { TUser } from '../entities/TUser';
export declare class UserService {
    private readonly tUserRepository;
    constructor(tUserRepository: Repository<TUser>);
    findUser_Username(username: string): Promise<TUser>;
}
