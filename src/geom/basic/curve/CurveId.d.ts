import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { ICurveId } from './ICurveId';
export declare class CurveId extends SerializableGeometry implements ICurveId {
    readonly id: number;
    constructor(id?: number);
    Id(): number;
    getHashKey(): string;
}
