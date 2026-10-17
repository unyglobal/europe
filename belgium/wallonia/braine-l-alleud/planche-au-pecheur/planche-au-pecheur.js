// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"planche-au-pecheur","repository":"europe","path":"belgium/wallonia/braine-l-alleud/planche-au-pecheur","depth":4,"parent":"belgium/wallonia/braine-l-alleud","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
