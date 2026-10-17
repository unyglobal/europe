// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"volendam","repository":"europe","path":"netherlands/north-holland/volendam","depth":3,"parent":"netherlands/north-holland","children":["munnikeveld"]});
export const childModules = Object.freeze({"munnikeveld":"./munnikeveld/munnikeveld.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
