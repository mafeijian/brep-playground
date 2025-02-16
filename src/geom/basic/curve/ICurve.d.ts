import { Vector3 } from 'three';
import { Point3d } from '../Point3d';
import { ICurveData } from './ICurveData';
import { INameEngine } from '../../naming/INameEngine';
import { Vector3d } from '../Vector3d';
export interface ICurve {
    clone(nameEngine: INameEngine): ICurve;
    /**
     * given parameter t to evaluate the point position on the curve.
     * @param t parameter t
     */
    evaluate(t: number): Point3d;
    /**
     * given parameter t to evaluate the point derivatives on the curve.
     * @param t parameter t
     * @param degree the order of the derivative.
     */
    derivate(t: number, degree: number): Vector3d;
    /**
     * given a certain point to get the parameter at the nearest point to it.
     * @param pnt the point
     */
    parameter(pnt: Point3d): number;
    /**
     * project a certain point onto the curve to obtain the corresponding parameter.
     * @param pnt the point
     */
    project(pnt: Point3d): number;
    /**
     * project a certain point onto the curve to obtain the corresponding position.
     * @param pnt the point
     */
    projectPnt(pnt: Point3d): Point3d;
    /**
     * determine if the point is on the curve or not.
     * @param pnt the point
     */
    isPointOnCurve(pnt: Point3d): boolean;
    /**
     * find the intersection point or points described by both intersecting parameters with another curve.
     * @param other a second curve.
     */
    intersect(other: ICurve): {
        tA: number;
        tB: number;
    }[];
    /**
     * check if I am even partly overlapped with another curve.
     * @param other a second curve.
     */
    overlap(other: ICurve): boolean;
    /**
     * reverse the whole curve as the opposite parametric direction.
     */
    reverse(): ICurve;
    /**
     * offset a curve at a certain position by a certain vector and the curve shape may distort accordingly.
     * @param at where we want to offset
     * @param dir which direction or how far to offset
     */
    offset(at: Point3d, dir: Vector3): ICurve;
    /**
     * move a curve as a whole by a certain vector and the curve shape is guaranteed never changed.
     * @param dir which direction to move.
     */
    move(dir: Vector3): ICurve;
    /**
     * assign additional information to the curve.
     * @param data additional information assigned to the curve.
     */
    setData(data: ICurveData): ICurveData;
    /**
     * read additional information from the curve if any.
     */
    getData(): ICurveData | undefined;
    debugDump(): any;
}
