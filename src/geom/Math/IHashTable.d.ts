export interface IHashTable<T> {
    keys(): string[];
    get(hash: string): T | undefined;
    has(hash: string): boolean;
    set(hash: string, item: T): void;
    delete(hash: string): void;
}
