// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reimarla","repository":"europe","path":"finland/uusimaa/pitajanmaki/reimarla","depth":4,"parent":"finland/uusimaa/pitajanmaki","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
