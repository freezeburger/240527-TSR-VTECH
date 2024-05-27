import { URL } from "../interfaces/semantic.type";
import { WithID } from "../interfaces/system.types";
import { CrudService, CrudServiceResponse } from "../pattern/crud.service";

type RestOptions = {
    method: 'GET' | 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
} | {
    method: 'POST' | 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: string;
}

export abstract class BaseService<T extends WithID> implements CrudService<T> {

    protected readonly options: RestOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    constructor(public endpoint: `${URL}/${string}s`) { }

    create(target: Omit<T, "id">): Promise<CrudServiceResponse<T>> {

        const options: RestOptions = { ...this.options, method: "POST", body: JSON.stringify(target) }

        return fetch(this.endpoint, options)
            .then<T>(res => res.json())
            .then(data => ({ status: "ACCEPTED", data }))
    }

    //overloads
    /**
     * @example
     * userService.read().then( res => console.log(res.data) )
     */
    read(): Promise<CrudServiceResponse<T[]>> 
    read(target: T): Promise<CrudServiceResponse<T>> 
    read(target?: T | undefined): Promise<CrudServiceResponse<T | T[]>> {

        const url = target ? `${this.endpoint}/${target.id}` : this.endpoint;

        return fetch(url, this.options)
            .then<T>(res => res.json())
            .then(data => ({ status: "ACCEPTED", data }))
    }

    update(target: T, update: Partial<T>): Promise<CrudServiceResponse<T>> {

        const url = `${this.endpoint}/${target.id}`;
        const payload = { ...target, ...update }
        const options: RestOptions = { ...this.options, method: "PUT", body: JSON.stringify(payload) }

        return fetch(url, options)
            .then<T>(res => res.json())
            .then(data => ({ status: "ACCEPTED", data }))
    }
    delete(target: T): Promise<CrudServiceResponse<T>> {

        const url = `${this.endpoint}/${target.id}`;
        const options: RestOptions = { ...this.options, method: "DELETE" }

        return fetch(url, options)
            .then<T>(res => res.json())
            .then(data => ({ status: "ACCEPTED", data }))
    }

}