// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hoogvliet","repository":"europe","path":"netherlands/south-holland/hoogvliet","depth":3,"parent":"netherlands/south-holland","children":["oudeland"]});
export const childModules = Object.freeze({"oudeland":"./oudeland/oudeland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
