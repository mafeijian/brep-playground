import { Envelope } from '../../basic/Envelope';
import { Point3d } from '../../basic/Point3d';
import { ISurface } from '../../basic/surface/ISurface';
import { INameEngine } from '../../naming/INameEngine';
import { ICurveSegment } from '../segment/ICurveSegment';
/**
 * a loop consist of a serias in topological order of curves each parametric from head to tail.
 */
export interface ICurveLoop {
    clone(nameEngine: INameEngine, surface?: ISurface): ICurveLoop;
    /**
     * eliminate some curve(s) from the loop.
     * @param start the first index of the curve wanted to remove from the loop.
     * @param count how many curves wanted to remove from the loop.
     * @param surface the surface in which the 3d loop resides.
     */
    drop(start: number, count?: number, surface?: ISurface): ICurveLoop;
    /**
     * append some segment(s) into the loop.
     * @param curveSegments the segments to add into the loop.
     * @param surface the surface in which the 3d loop resides.
     */
    append(curveSegments: ICurveSegment[], surface?: ISurface): ICurveLoop;
    /**
     * the segments count.
     */
    getCurveCount(): number;
    /**
     * index one segment.
     * @param index segment index
     */
    getCurveSegment(index: number): ICurveSegment;
    /**
     * reverse the direction of the loop together with the parametric direction of each segment.
     */
    reverse(): ICurveLoop;
    /**
     * determine if one directed loop is congruent to another directed one.
     * @param other a second loop
     */
    isCongruentTo(other: ICurveLoop): boolean;
    /**
     * -1
     */
    getNILIndex(): number;
    /**
     * the next index of current index
     * @param currentIndex current index
     */
    getNextIndex(currentIndex: number): number;
    /**
     * check the entry index of a loop if it is abnormally formed as shape 6.
     */
    findEntryIndex(): number;
    /**
     *
     * @param nameEngine stable naming engine.
     * @param surface the surface in which the 3d loop resides.
     */
    combineColinearCurves(nameEngine: INameEngine, surface?: ISurface): ICurveLoop;
    projectTo(nameEngine: INameEngine, surface: ISurface): ICurveLoop;
    getVertices(tolerence: number): Point3d[];
    updateEnvelope(surface: ISurface): Envelope | undefined;
    getEnvelope(): Envelope | undefined;
    debugDump(): any;
}
