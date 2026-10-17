// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tadley-hill","repository":"europe","path":"united-kingdom/england/tadley/tadley-hill","depth":4,"parent":"united-kingdom/england/tadley","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
