// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lappen","repository":"europe","path":"denmark/capital-region/helsing-r/lappen","depth":4,"parent":"denmark/capital-region/helsing-r","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
