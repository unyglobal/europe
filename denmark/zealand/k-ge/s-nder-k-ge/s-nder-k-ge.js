// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"s-nder-k-ge","repository":"europe","path":"denmark/zealand/k-ge/s-nder-k-ge","depth":4,"parent":"denmark/zealand/k-ge","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
