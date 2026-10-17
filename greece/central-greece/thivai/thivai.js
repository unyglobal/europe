// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thivai","repository":"europe","path":"greece/central-greece/thivai","depth":3,"parent":"greece/central-greece","children":["pyri"]});
export const childModules = Object.freeze({"pyri":"./pyri/pyri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
