import { Vector3 } from 'three';
import { Point3d } from '../../basic/Point3d';
import { CurveSegment } from './CurveSegment';
import { INameEngine } from '../../naming/INameEngine';
import { ICurve } from '../../basic/curve/ICurve';
import { ICurveSegmentData } from './ICurveSegmentData';
import { NurbsCurve } from '../../lib/@types/freebrep';
export declare class LineSegment extends CurveSegment {
    protected curve: ICurve;
    constructor();
    static construct(nameEngine: INameEngine, curve: ICurve, t0: number, t1: number, data?: ICurveSegmentData): LineSegment;
    clone(nameEngine: INameEngine): LineSegment;
    static createByEnds(nameEngine: INameEngine, p0: Point3d, p1: Point3d): LineSegment;
    getTessParams(tolerance: number): number[];
    getCurve(): ICurve;
    offset(at: Point3d, dir: Vector3): LineSegment;
    move(dir: Vector3): LineSegment;
    getNurbsForm(): NurbsCurve;
}
