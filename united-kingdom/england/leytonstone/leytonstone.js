// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leytonstone","repository":"europe","path":"united-kingdom/england/leytonstone","depth":3,"parent":"united-kingdom/england","children":["grove-green"]});
export const childModules = Object.freeze({"grove-green":"./grove-green/grove-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
