/// <reference types="vite/client" />

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'ghibli-ui' {
  export * from '../src/index';
}
