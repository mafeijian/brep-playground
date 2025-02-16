import { HashTable } from '../Math/HashTable';
import { ICurve } from '../basic/curve/ICurve';
import { ICurveId } from '../basic/curve/ICurveId';
import { ICurveSegment } from '../brep/segment/ICurveSegment';
import { ICurveSegmentId } from '../brep/segment/ICurveSegmentId';
import { SerializableGeometry } from '../serialization/SerializableGeometry';
import { INameEngine } from './INameEngine';
export declare class NameEngine extends SerializableGeometry implements INameEngine {
    /**
     * TODO: in case number overflow
     */
    currentCurveId: number;
    currentCurveSegmentId: number;
    curveHash: HashTable<ICurve>;
    curveSegmentHash: HashTable<ICurveSegment>;
    clone(): NameEngine;
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
