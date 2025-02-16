# BREP-playground

## Getting started

To make it easy for you to get started with me, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## How to play brep

```
cd existing_repo
git remote add origin https://github.com/mafeijian/brep-playground.git
git branch -M master
git push -uf origin master
```

- You may want to simply create extrusion shell for THREE.Mesh example here and you will see:

```javascript
    const material = new MeshStandardMaterial({ color: 0xffffff });
    const nameEngine = new NameEngine();

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

    const shell = Extrusion.construct(profile, up);
    const geoms6 = GeometryHelper.getGeometry(shell);
    const meshes6 = geoms6.map(geom => new Mesh(geom, material));
    scene.add(...meshes6);
```

- Say if you have two shells and you can calculate the boolean results by the boolean commands for example:

```javascript
   const shell4 = Boolean.boolCut(shell1, shell2);
   const shell5 = Boolean.boolUnion(shell3, shell4);
```

- Simply use following code if you want to show them in THREE.js,

```javascript
   const geoms4 = GeometryHelper.getGeometry(shell4);
   const geoms5 = GeometryHelper.getGeometry(shell5);
   const material = new MeshStandardMaterial({ color: 0xffffff });
   const meshes4 = geoms4.map(geom => new Mesh(geom, material));
   const meshes5 = geoms5.map(geom => new Mesh(geom, material));
   scene.add(...meshes4);
   scene.add(...meshes6);
```

# Example

You may want to checkout `examples/test.html` and run it locally to see live demostrates.

# For more

Refer to the comments of the code to see in more detail. Fell free to contact me if necessary.
