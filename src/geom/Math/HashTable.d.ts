import { IHashTable } from './IHashTable';
export declare class HashTable<T> implements IHashTable<T> {
    table: any;
    keys(): string[];
    get(hash: string): T | undefined;
    has(hash: string): boolean;
    set(hash: string, item: T): void;
    delete(hash: string): void;
}
