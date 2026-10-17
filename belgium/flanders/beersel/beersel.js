// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beersel","repository":"europe","path":"belgium/flanders/beersel","depth":3,"parent":"belgium/flanders","children":["nering"]});
export const childModules = Object.freeze({"nering":"./nering/nering.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
