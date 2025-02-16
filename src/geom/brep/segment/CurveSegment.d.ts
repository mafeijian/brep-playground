import { Vector3 } from 'three';
import { ICurve } from '../../basic/curve/ICurve';
import { Point3d } from '../../basic/Point3d';
import { ICurveSegment } from './ICurveSegment';
import { Interval } from '../../utils/boolean/1d/interval';
import { ICurveSegmentData } from './ICurveSegmentData';
import { INameEngine } from '../../naming/INameEngine';
import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { NurbsCurve } from '../../lib/@types/freebrep';
export declare abstract class CurveSegment extends SerializableGeometry implements ICurveSegment {
    protected t: number[];
    protected data: ICurveSegmentData | undefined;
    constructor();
    static constructBy(curveSegment: CurveSegment, nameEngine: INameEngine, t0: number, t1: number, data?: ICurveSegmentData): CurveSegment;
    bound(span: number[]): ICurveSegment;
    abstract clone(nameEngine: INameEngine): ICurveSegment;
    isCongruentTo(other: ICurveSegment): boolean;
    getEndParam(side: 0 | 1): number;
    abstract getTessParams(tolerance: number): number[];
    abstract getCurve(): ICurve;
    getEndPoint(side: 0 | 1): Point3d;
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
    abstract offset(at: Point3d, dir: Vector3): ICurveSegment;
    abstract move(dir: Vector3): ICurveSegment;
    setData(data: ICurveSegmentData): ICurveSegmentData;
    getData(): ICurveSegmentData | undefined;
    abstract getNurbsForm(): NurbsCurve;
    debugDump(): {
        curve: any;
        t: number[];
    };
}
