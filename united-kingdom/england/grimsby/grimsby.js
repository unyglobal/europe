// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grimsby","repository":"europe","path":"united-kingdom/england/grimsby","depth":3,"parent":"united-kingdom/england","children":["east-marsh","holme-hill","wellow"]});
export const childModules = Object.freeze({"east-marsh":"./east-marsh/east-marsh.js","holme-hill":"./holme-hill/holme-hill.js","wellow":"./wellow/wellow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
