import { WithID } from "../interfaces/system.types";
import { CrudService, CrudServiceResponse } from "../pattern/crud.service";

export abstract class BaseService<T extends WithID> implements CrudService<T>{
    
    create(target: Omit<T, "id">): Promise<CrudServiceResponse<T>> {
        throw new Error("Method not implemented.");
    }
    read(target?: T | undefined): Promise<CrudServiceResponse<T | T[]>> {
        throw new Error("Method not implemented.");
    }
    update(target: T, update: Partial<T>): Promise<CrudServiceResponse<T>> {
        throw new Error("Method not implemented.");
    }
    delete(target: T): Promise<CrudServiceResponse<T>> {
        throw new Error("Method not implemented.");
    }


    

}