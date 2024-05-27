import { WithID } from "./system.types";

export interface Post extends WithID {
    userId: number
    title: string
    body: string
  }