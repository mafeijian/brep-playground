/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import {
  WebGLRenderer,
  Scene,
  sRGBEncoding,
  EventDispatcher,
  PCFSoftShadowMap,
  AmbientLight,
  ReinhardToneMapping,
  Mesh,
  MeshStandardMaterial,
  Group,
  Object3D,
  PointLight,
  Material
} from 'three';

import Stats from 'three/examples/jsm/libs/stats.module.js';
import { CameraMgr } from './CameraMgr';
import { ArcSegment, Boolean, CurveLoop, Extrusion, GeometryHelper, LineSegment, NameEngine, Point3d, Shell, Vector3d } from '../src/geom';

class BrepPlayer extends EventDispatcher {
  domElement: HTMLElement;

  width: number;

  height: number;

  scene: Scene;

  model: Object3D;

  cameraMgr: CameraMgr;

  renderer: WebGLRenderer;

  requestId: number | undefined;

  stats: Stats | undefined;

  constructor(element: HTMLElement) {
    super();

    this.domElement = element;
    this.width = this.domElement.clientWidth;
    this.height = this.domElement.clientHeight;

    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.initiateRenderer(this.renderer);

    const aspect = this.width / this.height;
    this.cameraMgr = new CameraMgr();
    this.cameraMgr.createCamera(aspect);

    this.scene = new Scene();
    this.scene.add(new AmbientLight(0xffffff, 0.8));
    const pointLight = new PointLight(0xffffff, 100, 30);
    pointLight.position.y = 5;
    this.scene.add(pointLight);

    const group = new Group();
    this.model = group;

    group.rotateX(-0.5 * Math.PI);
    group.scale.multiplyScalar(1e-3);
    this.scene.add(group);

    /**
     * create brep shells
     */
    this.initScene(group);

    const enableStats = true;
    if (enableStats) {
      this.stats = Stats();
      this.domElement.appendChild(this.stats.dom);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  makePillar(nameEngine: NameEngine) {
    const radius = 250 * Math.sqrt(2);
    const a = new Point3d(1000, 1000, 0);
    const b = new Point3d(1500, 1000, 0);
    const c = new Point3d(1500, 1500, 0);
    const d = new Point3d(1000, 1500, 0);
    const up = new Vector3d(0, 0, 500);

    const normal = new Vector3d().copy(up.as());
    const ab = ArcSegment.createByEndsRadius(nameEngine, normal, a, b, radius);
    const bc = ArcSegment.createByEndsRadius(nameEngine, normal, b, c, radius);
    const cd = ArcSegment.createByEndsRadius(nameEngine, normal, c, d, radius);
    const da = ArcSegment.createByEndsRadius(nameEngine, normal, d, a, radius);
    const profile = CurveLoop.construct([ab, bc, cd, da]);

    return Extrusion.construct(profile, up);
  }

  // eslint-disable-next-line class-methods-use-this
  makeBox(nameEngine: NameEngine) {
    const a = new Point3d(0, 0, 0);
    const b = new Point3d(500, 0, 0);
    const c = new Point3d(500, 500, 0);
    const d = new Point3d(0, 500, 0);
    const up = new Vector3d(0, 0, 500);

    const ab = LineSegment.createByEnds(nameEngine, a, b);
    const bc = LineSegment.createByEnds(nameEngine, b, c);
    const cd = LineSegment.createByEnds(nameEngine, c, d);
    const da = LineSegment.createByEnds(nameEngine, d, a);
    const profile = CurveLoop.construct([ab, bc, cd, da]);

    return Extrusion.construct(profile, up);
  }

  // eslint-disable-next-line class-methods-use-this
  makePrism(nameEngine: NameEngine) {
    const a = new Point3d(200, 200, 250);
    const b = new Point3d(-400, 200, 250);
    const c = new Point3d(200, -400, 250);
    const up = new Vector3d(0, 0, 500);

    const ab = LineSegment.createByEnds(nameEngine, a, b);
    const bc = LineSegment.createByEnds(nameEngine, b, c);
    const ca = LineSegment.createByEnds(nameEngine, c, a);
    const profile = CurveLoop.construct([ab, bc, ca]);

    return Extrusion.construct(profile, up);
  }

  // eslint-disable-next-line class-methods-use-this
  makeBox2(nameEngine: NameEngine) {
    const a = new Point3d(100, 100, 100);
    const b = new Point3d(400, 100, 100);
    const c = new Point3d(400, 400, 100);
    const d = new Point3d(100, 400, 100);
    const up = new Vector3d(0, 0, 700);

    const ab = LineSegment.createByEnds(nameEngine, a, b);
    const bc = LineSegment.createByEnds(nameEngine, b, c);
    const cd = LineSegment.createByEnds(nameEngine, c, d);
    const da = LineSegment.createByEnds(nameEngine, d, a);
    const profile = CurveLoop.construct([ab, bc, cd, da]);

    return Extrusion.construct(profile, up);
  }

  // eslint-disable-next-line class-methods-use-this
  getMesh(shell: Shell, material: Material) {
    const scale = 0.5 * 1e-3; // 0.5 * 0.5 ㎡
    return GeometryHelper.getGeometry(shell, [scale, scale]).map(geom => new Mesh(geom, material));
  }

  // eslint-disable-next-line class-methods-use-this
  initScene(scene: Object3D) {
    //
    //      z
    //
    //      ^     y
    //      |
    //      |   /
    //      |  /
    //      | /
    //      |/
    //      +--------------> x
    //
    //    model space in millimeters
    //

    const material = new MeshStandardMaterial({ color: 0xffffff, metalness: 0.8 });

    const nameEngine = new NameEngine();

    const boxShell = this.makeBox(nameEngine);
    const prismShell = this.makePrism(nameEngine);
    const cutShell = Boolean.boolCut(boxShell, prismShell);
    const box2Shell = this.makeBox2(nameEngine);
    const unionShell = Boolean.boolUnion(cutShell, box2Shell);
    const pillarShell = this.makePillar(nameEngine);

    scene.add(...this.getMesh(unionShell, material), ...this.getMesh(pillarShell, material));
  }

  initiateRenderer(renderer: WebGLRenderer) {
    renderer.autoClear = true;

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;

    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.physicallyCorrectLights = true;

    this.renderer.setClearColor(0x000000, 0.0);
    this.renderer.outputEncoding = sRGBEncoding;
    this.renderer.toneMapping = ReinhardToneMapping;

    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.renderer.setSize(this.width, this.height);

    this.domElement.appendChild(this.renderer.domElement);
  }

  onWindowResize() {
    this.renderer.setSize(this.domElement.clientWidth, this.domElement.clientHeight);
  }

  animate() {
    this.requestId = requestAnimationFrame(this.animate.bind(this));

    this.render();
  }

  render() {
    this.stats?.update();

    const { renderer, scene, model, cameraMgr } = this;
    const camera = cameraMgr.getCamera();
    if (camera) {
      model.rotation.x += 0.01;
      model.rotation.y += 0.005;
      model.rotation.z += 0.003;

      renderer.render(scene, camera);
    }
  }
}

export { BrepPlayer };
