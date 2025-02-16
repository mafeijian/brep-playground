import { ICurveLoop } from '../../brep/loop/ICurveLoop';
import { SpanSide } from './SpanSide';
export declare class LoopIntersectPnt {
    /**
     *
     * @param type get type with true or 1 means loop a, or else means loop b.
     * @returns
     */
    getLoop(type: 0 | 1): ICurveLoop;
    /**
     *
     * @param type get type with true or 1 means loop a, or else means loop b.
     * @returns
     */
    getCurveSegIndex(type: 0 | 1): number;
    /**
     *
     * @param type get type with true or 1 means loop a, or else means loop b.
     * @returns
     */
    getSortParam(type: 0 | 1): number;
    /**
     *
     * @param type get type with true or 1 means loop a, or else means loop b.
     * @returns
     */
    getParam(type: 0 | 1, side: SpanSide): number;
}
