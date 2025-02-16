import { ICurveLoop } from '../../brep/loop/ICurveLoop';
import { Interval } from './1d/interval';
export declare class LoopSpan {
    loop: ICurveLoop;
    curveSegIndex: number;
    span: Interval;
    constructor(loop: ICurveLoop, curveSegIndex: number, span: Interval);
}
