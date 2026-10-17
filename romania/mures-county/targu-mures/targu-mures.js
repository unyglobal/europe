// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"targu-mures","repository":"europe","path":"romania/mures-county/targu-mures","depth":3,"parent":"romania/mures-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
