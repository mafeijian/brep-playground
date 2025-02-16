import { LoopIntersectPnt } from './LoopIntersectPnt';
import { LoopSpan } from './LoopSpan';
import { SpanSide } from './SpanSide';
export declare class LoopOverlapSpan extends LoopIntersectPnt {
    aLoopSpan: LoopSpan;
    bLoopSpan: LoopSpan;
    constructor(aLoopSpan: LoopSpan, bLoopSpan: LoopSpan);
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
    /**
     *
     * @param type get type with true or 1 means loop a, or else means loop b.
     * @returns
     */
    getLoopSpan(type: 0 | 1): LoopSpan;
    getOtherLoopSpan(type: 0 | 1): LoopSpan;
    getOtherSpanSide(type: 0 | 1, spanSide: SpanSide): SpanSide;
}
