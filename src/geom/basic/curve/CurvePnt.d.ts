import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { ICurve } from './ICurve';
export declare class CurvePnt extends SerializableGeometry {
    curve: ICurve | undefined;
    t: number;
    constructor();
    static construct(curve: ICurve, t: number): CurvePnt;
}
