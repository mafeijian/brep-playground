import { Vector3 } from 'three';
import { Point3d } from '../Point3d';
import { ICurve } from './ICurve';
import { ICurveData } from './ICurveData';
import { INameEngine } from '../../naming/INameEngine';
import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { Vector3d } from '../Vector3d';
export declare abstract class Curve extends SerializableGeometry implements ICurve {
    abstract clone(nameEngine: INameEngine): ICurve;
    abstract evaluate(t: number): Point3d;
    abstract derivate(t: number, degree: number): Vector3d;
    abstract parameter(pnt: Point3d): number;
    abstract project(pnt: Point3d): number;
    abstract projectPnt(pnt: Point3d): Point3d;
    abstract isPointOnCurve(pnt: Point3d): boolean;
    abstract intersect(other: ICurve): {
        tA: number;
        tB: number;
    }[];
    abstract overlap(other: ICurve): boolean;
    abstract reverse(): ICurve;
    abstract offset(at: Point3d, dir: Vector3): ICurve;
    abstract move(dir: Vector3): ICurve;
    abstract setData(data: ICurveData): ICurveData;
    abstract getData(): ICurveData | undefined;
    abstract debugDump(): any;
}
