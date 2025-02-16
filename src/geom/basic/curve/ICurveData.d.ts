import { DeriveType } from '../../naming/DeriveType';
import { INameEngine } from '../../naming/INameEngine';
import { ICurveId } from './ICurveId';
export interface ICurveData {
    getId(): ICurveId;
    clone(nameEngine: INameEngine): ICurveData;
    getDeriveFromId(): ICurveId | undefined;
    getDeriveType(): DeriveType | undefined;
}
