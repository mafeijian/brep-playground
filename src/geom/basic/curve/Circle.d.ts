import { Vector3 } from 'three';
import { Curve } from './Curve';
import { Point3d } from '../Point3d';
import { ICurve } from './ICurve';
import { ICurveData } from './ICurveData';
import { INameEngine } from '../../naming/INameEngine';
import { Vector3d } from '../Vector3d';
export declare class Circle extends Curve {
    center: Point3d;
    normal: Vector3d;
    axisU: Vector3d;
    axisV: Vector3d;
    radius: number;
    data: ICurveData | undefined;
    constructor();
    /**
     * create a circle given center, radius and its orientation.
     * @param nameEngine stable naming engine.
     * @param center circle center.
     * @param normal circle normal.
     * @param axisU parametric u direction acceptable if it never perpendicular to normal and parametric v direction is calculated automatically follows u x v = n.
     * @param radius circle radius.
     * @param data circle data.
     * @returns the circle created.
     */
    static construct(nameEngine: INameEngine, center: Point3d, normal: Vector3d, axisU: Vector3d, radius: number, data?: ICurveData): Circle;
    clone(nameEngine: INameEngine): ICurve;
    evaluate(t: number): Point3d;
    derivate(t: number, degree?: number): Vector3d;
    parameter(pnt: Point3d): number;
    project(pnt: Point3d): number;
    projectPnt(pnt: Point3d): Point3d;
    isPointOnCurve(pnt: Point3d): boolean;
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
