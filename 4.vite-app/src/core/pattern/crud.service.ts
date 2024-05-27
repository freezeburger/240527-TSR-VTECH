import { WithID } from "../interfaces/system.types";



export interface CrudServiceResponse<T>{
    data:T;
    status: 'ACCEPTED' | 'REJECTED'
}

// export type AppEntities = (User | Post);

export interface CrudService<Entity extends WithID>{

   
    
    create(target:Omit<Entity, 'id'>):Promise<CrudServiceResponse<Entity>>;

    read(target?:Entity):Promise<CrudServiceResponse<Entity[] | Entity>>;

    update(target:Entity, update:Partial<Entity>):Promise<CrudServiceResponse<Entity>>;

    delete(target:Entity):Promise<CrudServiceResponse<Entity>>;

}
