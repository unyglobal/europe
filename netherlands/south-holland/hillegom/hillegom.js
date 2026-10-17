// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hillegom","repository":"europe","path":"netherlands/south-holland/hillegom","depth":3,"parent":"netherlands/south-holland","children":["elsbroek"]});
export const childModules = Object.freeze({"elsbroek":"./elsbroek/elsbroek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
