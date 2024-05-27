import { Post } from "../interfaces/post.entity";
import { URL } from "../interfaces/semantic.type";
import { BaseService } from "./base.service";


export class PostService extends BaseService<Post> {

    constructor(endpoint: `${URL}/posts`  ){
        super(endpoint);
    }
    
}


