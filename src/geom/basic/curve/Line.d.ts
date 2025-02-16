import { Vector3 } from 'three';
import { Curve } from './Curve';
import { Point3d } from '../Point3d';
import { ICurve } from './ICurve';
import { ICurveData } from './ICurveData';
import { INameEngine } from '../../naming/INameEngine';
import { Vector3d } from '../Vector3d';
export declare class Line extends Curve {
    origin: Point3d;
    dir: Vector3d;
    data: ICurveData | undefined;
    constructor();
    static construct(nameEngine: INameEngine, origin: Point3d, dir: Vector3d, data?: ICurveData): Line;
    clone(nameEngine: INameEngine): ICurve;
    evaluate(t: number): Point3d;
    derivate(t: number, degree?: number): Vector3d;
    parameter(pnt: Point3d): number;
    project(pnt: Point3d): number;
    projectPnt(pnt: Point3d): Point3d;
    isPointOnCurve(pnt: Point3d): boolean;
    parallelTo(other: Line): boolean;
    intersect(other: ICurve): {
        tA: number;
        tB: number;
    }[];
    overlap(other: ICurve): boolean;
    reverse(): ICurve;
    offset(at: Point3d, dir: Vector3): ICurve;
    move(dir: Vector3): ICurve;
    setData(data: ICurveData): ICurveData;
    getData(): ICurveData | undefined;
    debugDump(): {
        origin: Point3d;
        dir: Vector3d;
    };
}
