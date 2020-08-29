import { BaseResourceModel } from '../model/base-resource-model';
import { Observable } from 'rxjs';
export declare interface BaseCrud {
    getAll(): Array<any>;
    get(id: string): any;
    remove(id: string);
    update(obj: any);
    insert(obj: any): any;
}
