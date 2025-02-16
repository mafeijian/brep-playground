import { LoopIntersectPnt } from './LoopIntersectPnt';
import { LoopPnt } from './LoopPnt';
import { SpanSide } from './SpanSide';
export declare class LoopCrossPnt extends LoopIntersectPnt {
    aLoopPnt: LoopPnt;
    bLoopPnt: LoopPnt;
    constructor(aLoopPnt: LoopPnt, bLoopPnt: LoopPnt);
    /**
     *
     * @param type get type with true or 1 means loop a, or else means loop b.
     * @returns
     */
    getLoop(type: 0 | 1): import("../..").ICurveLoop;
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
