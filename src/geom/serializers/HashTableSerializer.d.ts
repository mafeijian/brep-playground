import { HashTable } from '../Math/HashTable';
import { ISerialization, ISerializer } from '../lib/@types/serial';
export declare class HashTableSerializer<T> implements ISerializer<HashTable<T>> {
    getClassName(): string;
    isSerializable<U>(object: U): boolean;
    serialize(serialization: ISerialization, objects: HashTable<T>): any;
    deserialize(serialization: ISerialization, raw: any): HashTable<any> | undefined;
}
