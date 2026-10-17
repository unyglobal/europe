// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puistola","repository":"europe","path":"finland/uusimaa/suurmetsa/puistola","depth":4,"parent":"finland/uusimaa/suurmetsa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
