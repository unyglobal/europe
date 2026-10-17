// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northolt","repository":"europe","path":"united-kingdom/england/northolt","depth":3,"parent":"united-kingdom/england","children":["northolt-mandeville"]});
export const childModules = Object.freeze({"northolt-mandeville":"./northolt-mandeville/northolt-mandeville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
