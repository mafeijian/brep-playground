import { Matrix4 } from 'three';
import { ParamUV } from '../ParamUV';
import { Point3d } from '../Point3d';
import { ISurface } from './ISurface';
import { ISurfaceData } from './ISurfaceData';
import { SerializableGeometry } from '../../serialization/SerializableGeometry';
export declare abstract class Surface extends SerializableGeometry implements ISurface {
    abstract applyMatrix(mat: Matrix4): ISurface;
    abstract project(pnt: Point3d): ParamUV;
    abstract projectPnt(pnt: Point3d): Point3d;
    abstract evaluate(uv: ParamUV): Point3d;
    abstract setData(data: ISurfaceData): ISurfaceData;
    abstract getData(): ISurfaceData | undefined;
}
