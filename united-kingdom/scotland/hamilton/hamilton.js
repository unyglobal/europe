// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamilton","repository":"europe","path":"united-kingdom/scotland/hamilton","depth":3,"parent":"united-kingdom/scotland","children":["silvertonhill"]});
export const childModules = Object.freeze({"silvertonhill":"./silvertonhill/silvertonhill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
