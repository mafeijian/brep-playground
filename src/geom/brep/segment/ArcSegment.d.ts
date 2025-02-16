import { Vector3 } from 'three';
import { Point3d } from '../../basic/Point3d';
import { CurveSegment } from './CurveSegment';
import { INameEngine } from '../../naming/INameEngine';
import { ICurve } from '../../basic/curve/ICurve';
import { ICurveSegmentData } from './ICurveSegmentData';
import { Vector3d } from '../../basic/Vector3d';
import { NurbsCurve } from '../../lib/@types/freebrep';
export declare class ArcSegment extends CurveSegment {
    protected curve: ICurve;
    constructor();
    static construct(nameEngine: INameEngine, curve: ICurve, t0: number, t1: number, data?: ICurveSegmentData): ArcSegment;
    clone(nameEngine: INameEngine): ArcSegment;
    static createByEndsRadius(nameEngine: INameEngine, normal: Vector3d, p0: Point3d, p1: Point3d, radius: number): ArcSegment;
    getTessParams(tolerance: number): number[];
    getCurve(): ICurve;
    offset(at: Point3d, dir: Vector3): ArcSegment;
    move(dir: Vector3): ArcSegment;
    getNurbsForm(): NurbsCurve;
}
