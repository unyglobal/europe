// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karlstad","repository":"europe","path":"sweden/vaermland/karlstad","depth":3,"parent":"sweden/vaermland","children":["herrhagen"]});
export const childModules = Object.freeze({"herrhagen":"./herrhagen/herrhagen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
