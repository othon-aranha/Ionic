import { BaseResourceModel } from '../model/base-resource-model';

export declare interface BaseCrud {
    getAll(): Array<BaseResourceModel>;
    get(id: string): BaseResourceModel;
    remove(id: string): void;
    update(obj: BaseResourceModel): void;
    insert(obj: BaseResourceModel): BaseResourceModel;
}
