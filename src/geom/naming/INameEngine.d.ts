import { ICurve } from '../basic/curve/ICurve';
import { ICurveId } from '../basic/curve/ICurveId';
import { ICurveSegment } from '../brep/segment/ICurveSegment';
import { ICurveSegmentId } from '../brep/segment/ICurveSegmentId';
export interface INameEngine {
    clone(): INameEngine;
    restore(capture: INameEngine): INameEngine;
    getCurrentCurveId(): ICurveId;
    allocCurveId(): ICurveId;
    getCurrentCurveSegmentId(): ICurveSegmentId;
    allocCurveSegmentId(): ICurveSegmentId;
    addCurve(curve: ICurve): void;
    deleteCurve(curve: ICurve): void;
    getCurve(curveId: ICurveId): ICurve | undefined;
    addCurveSegment(curve: ICurveSegment): void;
    deleteCurveSegment(curve: ICurveSegment): void;
    getCurveSegment(curveSegmentId: ICurveSegmentId): ICurveSegment | undefined;
}
