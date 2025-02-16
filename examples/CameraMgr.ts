import { PerspectiveCamera } from 'three';

export class CameraMgr {
  camera: PerspectiveCamera | undefined;

  fov: number = 60;

  cameraNear: number = 0.01;

  cameraFar: number = 10000;

  createCamera(aspect: number) {
    if (!this.camera) {
      this.camera = new PerspectiveCamera(this.fov, aspect, this.cameraNear, this.cameraFar);
      this.camera.position.z = 5;
    }
    return this.camera;
  }

  getCamera() {
    return this.camera;
  }
}
