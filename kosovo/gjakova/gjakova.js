// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gjakova","repository":"europe","path":"kosovo/gjakova","depth":2,"parent":"kosovo","children":["decan","gjakove","orahovac"]});
export const childModules = Object.freeze({"decan":"./decan/decan.js","gjakove":"./gjakove/gjakove.js","orahovac":"./orahovac/orahovac.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
