// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"top","repository":"europe","path":"netherlands/flevoland/urk/top","depth":4,"parent":"netherlands/flevoland/urk","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
