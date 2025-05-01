import { UserService } from '../user/user.service';
import { TUser } from '../entities/TUser';
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    validateUser(username: string, password: string): Promise<TUser>;
}
