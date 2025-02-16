import { Vector3 } from 'three';
import { ICurve } from '../../basic/curve/ICurve';
import { Point3d } from '../../basic/Point3d';
import { Interval } from '../../utils/boolean/1d/interval';
import { ICurveSegmentData } from './ICurveSegmentData';
import { INameEngine } from '../../naming/INameEngine';
import { NurbsCurve } from '../../lib/@types/freebrep';
export interface ICurveSegment {
    clone(nameEngine: INameEngine): ICurveSegment;
    isCongruentTo(other: ICurveSegment): boolean;
    getEndParam(side: 0 | 1): number;
    getTessParams(tolerance: number): number[];
    getCurve(): ICurve;
    getEndPoint(side: 0 | 1): Point3d;
    bound(span: number[]): ICurveSegment;
    paramWithIn(t: number): boolean;
    paramAtEnd(t: number, side: 0 | 1): boolean;
    paramOnCurve(t: number): boolean;
    isPointOnCurve(pnt: Point3d): boolean;
    intersect(other: ICurveSegment): {
        tA: number;
        tB: number;
    }[];
    overlap(other: ICurveSegment): Interval | undefined;
    reverse(): ICurveSegment;
    offset(at: Point3d, dir: Vector3): ICurveSegment;
    move(dir: Vector3): ICurveSegment;
    setData(data: ICurveSegmentData): ICurveSegmentData;
    getData(): ICurveSegmentData | undefined;
    getNurbsForm(): NurbsCurve;
    debugDump(): any;
}
