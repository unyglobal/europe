// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valendries","repository":"europe","path":"netherlands/gelderland/wijchen/valendries","depth":4,"parent":"netherlands/gelderland/wijchen","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
