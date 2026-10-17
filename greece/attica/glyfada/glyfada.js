// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"glyfada","repository":"europe","path":"greece/attica/glyfada","depth":3,"parent":"greece/attica","children":["pyrnari"]});
export const childModules = Object.freeze({"pyrnari":"./pyrnari/pyrnari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
