// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arroka","repository":"europe","path":"spain/basque-country/hondarribia/arroka","depth":4,"parent":"spain/basque-country/hondarribia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
