import { PostService } from "./post.service";
import { UserService } from "./user.service";

export const userService = new UserService('https://jsonplaceholder.typicode.com/users')
export const postService = new PostService('https://jsonplaceholder.typicode.com/posts')