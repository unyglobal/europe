// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rutenfeld","repository":"europe","path":"germany/brandenburg/bernau-bei-berlin/rutenfeld","depth":4,"parent":"germany/brandenburg/bernau-bei-berlin","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
