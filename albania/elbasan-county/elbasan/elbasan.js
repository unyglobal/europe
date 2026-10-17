// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"elbasan","repository":"europe","path":"albania/elbasan-county/elbasan","depth":3,"parent":"albania/elbasan-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
