// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"the-leylands","repository":"europe","path":"united-kingdom/england/leeds/the-leylands","depth":4,"parent":"united-kingdom/england/leeds","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
