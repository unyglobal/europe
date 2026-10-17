// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"novoul-yanovsk","repository":"europe","path":"russia/ulyanovsk/novoul-yanovsk","depth":3,"parent":"russia/ulyanovsk","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
