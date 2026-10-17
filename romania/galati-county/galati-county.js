// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"galati-county","repository":"europe","path":"romania/galati-county","depth":2,"parent":"romania","children":["galati","tecuci"]});
export const childModules = Object.freeze({"galati":"./galati/galati.js","tecuci":"./tecuci/tecuci.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
