// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heerenveen","repository":"europe","path":"netherlands/friesland/heerenveen","depth":3,"parent":"netherlands/friesland","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
