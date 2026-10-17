// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cologno-monzese","repository":"europe","path":"italy/lombardy/cologno-monzese","depth":3,"parent":"italy/lombardy","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
