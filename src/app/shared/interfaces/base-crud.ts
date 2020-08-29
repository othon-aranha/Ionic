import { BaseResourceModel } from '../model/base-resource-model';
import { Observable } from 'rxjs';
export declare interface BaseCrud {
    getAll(): Array<any>;
    get(id: number): any;
    remove(id: number);
    update(obj: any);
    insert(obj: any): any;
}
