import { Matrix4, Vector3 } from 'three';
import { Point3d } from '../Point3d';
import { Surface } from './Surface';
import { ParamUV } from '../ParamUV';
import { ISurfaceData } from './ISurfaceData';
import { Vector3d } from '../Vector3d';
export declare class Plane extends Surface {
    origin: Point3d;
    vecU: Vector3d;
    vecV: Vector3d;
    normal: Vector3d;
    data: ISurfaceData | undefined;
    constructor();
    static construct(origin: Point3d, vecU: Vector3d, vecV: Vector3d): Plane;
    static createByOriginAndNormal(origin: Point3d, normal: Vector3): Plane;
    applyMatrix(mat: Matrix4): Plane;
    evaluate(uv: ParamUV): Point3d;
    project(pnt: Point3d): ParamUV;
    projectPnt(pnt: Point3d): Point3d;
    parallelTo(other: Plane): boolean;
    distanceTo(other: Plane): number;
    setData(data: ISurfaceData): ISurfaceData;
    getData(): ISurfaceData | undefined;
}
