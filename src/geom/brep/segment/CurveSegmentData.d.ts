import { DeriveType } from '../../naming/DeriveType';
import { INameEngine } from '../../naming/INameEngine';
import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { ICurveSegmentData } from './ICurveSegmentData';
import { ICurveSegmentId } from './ICurveSegmentId';
export declare class CurveSegmentData extends SerializableGeometry implements ICurveSegmentData {
    id: ICurveSegmentId;
    deriveType: DeriveType | undefined;
    deriveFrom: ICurveSegmentId | undefined;
    constructor();
    static construct(nameEngine: INameEngine): CurveSegmentData;
    getId(): ICurveSegmentId;
    clone(nameEngine: INameEngine): ICurveSegmentData;
    getDeriveFromId(): ICurveSegmentId | undefined;
    getDeriveType(): DeriveType | undefined;
}
