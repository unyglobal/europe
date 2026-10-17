// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mexborough","repository":"europe","path":"united-kingdom/england/mexborough","depth":3,"parent":"united-kingdom/england","children":["dolcliffe-common","highwoods"]});
export const childModules = Object.freeze({"dolcliffe-common":"./dolcliffe-common/dolcliffe-common.js","highwoods":"./highwoods/highwoods.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
