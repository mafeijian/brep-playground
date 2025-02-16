import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { ICurveSegmentId } from './ICurveSegmentId';
export declare class CurveSegmentId extends SerializableGeometry implements ICurveSegmentId {
    readonly id: number;
    constructor(id?: number);
    Id(): number;
    getHashKey(): string;
}
