import { Matrix4 } from 'three';
import { ParamUV } from '../ParamUV';
import { Point3d } from '../Point3d';
import { ISurfaceData } from './ISurfaceData';
export interface ISurface {
    applyMatrix(mat: Matrix4): ISurface;
    project(pnt: Point3d): ParamUV;
    projectPnt(pnt: Point3d): Point3d;
    evaluate(uv: ParamUV): Point3d;
    setData(data: ISurfaceData): ISurfaceData;
    getData(): ISurfaceData | undefined;
}
