import { ParamUV } from '../../../basic/ParamUV';
import { Plane } from '../../../basic/surface/Plane';
import { ICurveLoop } from '../../../brep/loop/ICurveLoop';
/**
 * a 2d descrete polygon can be obtained by projecting a tessellated 3d loop onto a plane.
 */
export declare class Polygon {
    vertices: ParamUV[];
    loop: ICurveLoop;
    constructor(plane: Plane, loop: ICurveLoop, tolerence: number);
    isPntInside(pnt: ParamUV): number;
}
