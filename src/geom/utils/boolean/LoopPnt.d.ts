import { ICurveLoop } from '../../brep/loop/ICurveLoop';
export declare class LoopPnt {
    loop: ICurveLoop;
    curveSegIndex: number;
    t: number;
    constructor(loop: ICurveLoop, curveSegIndex: number, t: number);
}
