import { SoupUV } from './GeometryProducer';
import { Shell } from '../../lib/@types/freebrep';
export declare class GeometryHelper {
    static getGeometry(shell: Shell, materialUVScales?: SoupUV): import("three").BufferGeometry[];
}
