// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vii-kaupunginosa","repository":"europe","path":"finland/southwest-finland/turku/vii-kaupunginosa","depth":4,"parent":"finland/southwest-finland/turku","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
