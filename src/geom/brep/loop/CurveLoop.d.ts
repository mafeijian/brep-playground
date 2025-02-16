import { Envelope } from '../../basic/Envelope';
import { Point3d } from '../../basic/Point3d';
import { ISurface } from '../../basic/surface/ISurface';
import { INameEngine } from '../../naming/INameEngine';
import { SerializableGeometry } from '../../serialization/SerializableGeometry';
import { ICurveSegment } from '../segment/ICurveSegment';
import { ICurveLoop } from './ICurveLoop';
export declare class CurveLoop extends SerializableGeometry implements ICurveLoop {
    curveSegments: ICurveSegment[];
    envelope: Envelope | undefined;
    constructor();
    static construct(curveSegments?: ICurveSegment[], surface?: ISurface): CurveLoop;
    clone(nameEngine: INameEngine, surface?: ISurface): ICurveLoop;
    drop(start: number, count?: number, surface?: ISurface): ICurveLoop;
    append(curveSegments: ICurveSegment[], surface?: ISurface): this;
    getCurveCount(): number;
    getCurveSegment(index: number): ICurveSegment;
    isCongruentTo(other: ICurveLoop): boolean;
    reverse(): ICurveLoop;
    getNILIndex(): number;
    getNextIndex(currentIndex: number): number;
    /**
     * fast travels twice speed as slow and they meet.
     * fast travels from head with the same speed as slow and meet again.
     * @returns loop entry
     */
    findEntryIndex(): number;
    combineColinearCurves(nameEngine: INameEngine, surface?: ISurface): ICurveLoop;
    projectTo(nameEngine: INameEngine, surface: ISurface): ICurveLoop;
    getVertices(tolerence: number): Point3d[];
    updateEnvelope(surface: ISurface): Envelope | undefined;
    getEnvelope(): Envelope | undefined;
    debugDump(): {
        curveSegments: any[];
    };
}
