import { SerializableGeometry } from '../serialization/SerializableGeometry';
import { ParamUV } from './ParamUV';
export declare class Envelope extends SerializableGeometry {
    minUV: ParamUV;
    maxUV: ParamUV;
    constructor();
    static construct(uv: ParamUV): Envelope;
    static createFromPnts(...pnts: ParamUV[]): Envelope;
    expand(...pnts: ParamUV[]): void;
    intersects(other: Envelope): boolean;
}
