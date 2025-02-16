import { Matrix4, Quaternion, Vector3 } from 'three';
import { SerializableGeometry } from '../serialization/SerializableGeometry';
export declare class Vector3d extends SerializableGeometry {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    setX(x: number): void;
    setY(y: number): void;
    setZ(z: number): void;
    copy(vec: Vector3): this;
    as(): Vector3;
    add(vec: Vector3): this;
    sub(vec: Vector3): this;
    normalize(): this;
    multiplyScalar(t: number): this;
    cross(vec: Vector3): this;
    applyQuaternion(q: Quaternion): this;
    applyMatrix4(mat: Matrix4): this;
    dot(vec: Vector3): number;
    length(): number;
    lengthSq(): number;
    distanceToSquared(vec: Vector3): number;
    distanceTo(vec: Vector3): number;
}
