// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorbitz-nord-neu-omsewitz","repository":"europe","path":"germany/saxony/gorbitz/gorbitz-nord-neu-omsewitz","depth":4,"parent":"germany/saxony/gorbitz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
