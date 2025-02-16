import { ISerializableObject } from '../lib/@types/serial';
export declare class SerializableGeometry implements ISerializableObject {
    protected readonly hash: any;
    constructor();
    getHashObject(): any;
    getProp(property: string): any;
    setProp(property: string, value: any): any;
}
