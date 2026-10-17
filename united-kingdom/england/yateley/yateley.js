// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yateley","repository":"europe","path":"united-kingdom/england/yateley","depth":3,"parent":"united-kingdom/england","children":["moulsham-green"]});
export const childModules = Object.freeze({"moulsham-green":"./moulsham-green/moulsham-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
