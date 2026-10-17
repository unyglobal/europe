// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mal-i-kakariqit","repository":"europe","path":"albania/lezhe-county/lezhe/mal-i-kakariqit","depth":4,"parent":"albania/lezhe-county/lezhe","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
