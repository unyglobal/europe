// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wetzelsdorf","repository":"europe","path":"austria/styria/wetzelsdorf","depth":3,"parent":"austria/styria","children":["krottendorf"]});
export const childModules = Object.freeze({"krottendorf":"./krottendorf/krottendorf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
