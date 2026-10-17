// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oud-diemen","repository":"europe","path":"netherlands/north-holland/diemen/oud-diemen","depth":4,"parent":"netherlands/north-holland/diemen","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
