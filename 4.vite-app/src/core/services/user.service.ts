import { URL } from "../interfaces/semantic.type";
import { User } from "../interfaces/user.entity";
import { BaseService } from "./base.service";


export class UserService extends BaseService<User> {

    constructor(endpoint: `${URL}/users`  ){
        super(endpoint);
    }
    
}


