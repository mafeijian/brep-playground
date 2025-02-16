import { BufferGeometry } from 'three';
export type SoupVec2<T> = [T, T];
export type SoupVec3<T> = [T, T, T];
export type SoupPos = SoupVec3<number>;
export type SoupNorm = SoupVec3<number>;
export type SoupUV = SoupVec2<number>;
export type SoupPoint = {
    position?: SoupPos;
    normal?: SoupNorm;
    uv?: SoupUV;
};
export declare class GeometryProducer {
    static run(tessTriangles: {
        points: SoupPoint[];
        triangles: number[];
    }, geom?: BufferGeometry): BufferGeometry;
}
