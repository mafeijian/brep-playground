import { Vector3 } from 'three';
export declare function areVectorsParallel3(a: Vector3, b: Vector3, epsilon?: number): boolean;
export declare function areVectorsPerpendicular3(a: Vector3, b: Vector3, epsilon?: number): boolean;
export declare function isLeft(left: Vector3, right: Vector3, normal: Vector3, epsilon?: number): boolean;
export declare function isNeitherSide(left: Vector3, right: Vector3, normal: Vector3, epsilon?: number): boolean;
