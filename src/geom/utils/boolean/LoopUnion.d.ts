import { ICurveLoop } from '../../brep/loop/ICurveLoop';
import { Plane } from '../../basic/surface/Plane';
import { INameEngine } from '../../naming/INameEngine';
export declare function singleLoopUnion(nameEngine: INameEngine, target: ICurveLoop, tool: ICurveLoop, plane: Plane): ICurveLoop[];
/**
 * unions two loops if they are in a coplane.
 * @param nameEngine stable naming engine.
 * @param target the first loop.
 * @param tool the second loop.
 * @param plane the plane in which both loops reside.
 * @returns the union loop.
 */
export declare function loopUnion(nameEngine: INameEngine, target: ICurveLoop[], tool: ICurveLoop[], plane: Plane): {
    unionLoops: ICurveLoop[];
    hasIntersect: boolean;
};
