// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kerkrade","repository":"europe","path":"netherlands/limburg/kerkrade","depth":3,"parent":"netherlands/limburg","children":["ham","holz"]});
export const childModules = Object.freeze({"ham":"./ham/ham.js","holz":"./holz/holz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
