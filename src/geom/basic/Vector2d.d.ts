import { Vector2 } from 'three';
import { SerializableGeometry } from '../serialization/SerializableGeometry';
export declare class Vector2d extends SerializableGeometry {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    setX(x: number): void;
    setY(y: number): void;
    copy(vec: Vector2): this;
    as(): Vector2;
    distanceTo(vec: Vector2): number;
}
