import { Shell } from '../../../lib/@types/freebrep';
export declare class Boolean {
    /**
     * boolean operation to union the target entity with tool shape.
     * @param target the target shell
     * @param tool the tool shell
     * @returns the union shell
     */
    static boolUnion(target: Shell, tool: Shell): Shell;
    /**
     * boolean operation to intersect the target entity with tool shape.
     * @param target the target shell
     * @param tool the tool shell
     * @returns the intersection shell
     */
    static boolIntersect(target: Shell, tool: Shell): Shell;
    /**
     * boolean operation to cut the target entity with tool shape.
     * @param target the target shell
     * @param tool the tool shell
     * @returns the left shell
     */
    static boolCut(target: Shell, tool: Shell): Shell;
}
