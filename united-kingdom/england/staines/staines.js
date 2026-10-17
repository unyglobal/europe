// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"staines","repository":"europe","path":"united-kingdom/england/staines","depth":3,"parent":"united-kingdom/england","children":["birch-green","knowle-green"]});
export const childModules = Object.freeze({"birch-green":"./birch-green/birch-green.js","knowle-green":"./knowle-green/knowle-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
