import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { ICurveSegment } from './ICurveSegment';
export declare class CurveSegmentPnt extends SerializableGeometry {
    curveSeg: ICurveSegment;
    t: number;
    constructor();
    static construct(curveSeg: ICurveSegment, t: number): CurveSegmentPnt;
}
