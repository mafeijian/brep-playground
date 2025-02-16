import { DeriveType } from '../../naming/DeriveType';
import { INameEngine } from '../../naming/INameEngine';
import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { ICurveData } from './ICurveData';
import { ICurveId } from './ICurveId';
export declare class CurveData extends SerializableGeometry implements ICurveData {
    id: ICurveId;
    deriveType: DeriveType | undefined;
    deriveFrom: ICurveId | undefined;
    constructor();
    static construct(nameEngine: INameEngine): CurveData;
    getId(): ICurveId;
    clone(nameEngine: INameEngine): ICurveData;
    getDeriveFromId(): ICurveId | undefined;
    getDeriveType(): DeriveType | undefined;
}
