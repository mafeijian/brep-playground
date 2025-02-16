import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'examples/BrepPlayer.ts',

  output: [
    {
      file: 'dist/BrepPlayer.js',
      format: 'umd',
      name: 'BrepPlayer'
    }
  ],

  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    babel(),
    commonjs(),
    nodeResolve({
      // use "jsnext:main" if possible
      // see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true
    })
  ]
};
