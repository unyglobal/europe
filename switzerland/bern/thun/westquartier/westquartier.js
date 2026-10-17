// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"westquartier","repository":"europe","path":"switzerland/bern/thun/westquartier","depth":4,"parent":"switzerland/bern/thun","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
