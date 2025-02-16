import { Vector3d } from '../../basic/Vector3d';
import { CurveLoop } from '../../brep/loop/CurveLoop';
export declare class Extrusion {
    static construct(curveLoop: CurveLoop, direction: Vector3d): import("../../lib/@types/freebrep").Shell;
}
