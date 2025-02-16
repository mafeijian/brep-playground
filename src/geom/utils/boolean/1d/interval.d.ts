export declare class Interval {
    start: number;
    end: number;
    constructor(a: number, b: number);
    intersects(other: Interval): Interval | undefined;
    contians(other: Interval): boolean;
}
