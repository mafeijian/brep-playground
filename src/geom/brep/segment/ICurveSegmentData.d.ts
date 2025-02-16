import { DeriveType } from '../../naming/DeriveType';
import { INameEngine } from '../../naming/INameEngine';
import { ICurveSegmentId } from './ICurveSegmentId';
export interface ICurveSegmentData {
    getId(): ICurveSegmentId;
    clone(nameEngine: INameEngine): ICurveSegmentData;
    getDeriveFromId(): ICurveSegmentId | undefined;
    getDeriveType(): DeriveType | undefined;
}
