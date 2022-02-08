import { join } from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve'; //处理第三方模考
// import commonjs from '@rollup/plugin-commonjs' // commonjs转es6, 前端代码不需要
import { terser } from 'rollup-plugin-terser'; //压缩js
// import typescript from 'rollup-plugin-typescript2'; //编译ts
// import css from 'rollup-plugin-css-only'; // 编译css
// import scss from 'rollup-plugin-scss'; //编译scss
// import babel from '@rollup/plugin-babel'; // 编译es6
// import vue from 'rollup-plugin-vue';
// import del from 'rollup-plugin-delete';
import pkg from '../package.json';

const deps = object.keys(pkg.dependencies);

export default {
  input: join(__dirname, '..', 'src/components/index.ts'),
  output: {
    format: 'esm',
    file: 'lib/esm/index.js',
    name: 'vue-tsx-ui',
    exports: 'named',
  },
  plugins: [terser(), nodeResolve()],
};
