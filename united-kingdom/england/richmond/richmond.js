// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"richmond","repository":"europe","path":"united-kingdom/england/richmond","depth":3,"parent":"united-kingdom/england","children":["north-richmond"]});
export const childModules = Object.freeze({"north-richmond":"./north-richmond/north-richmond.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
