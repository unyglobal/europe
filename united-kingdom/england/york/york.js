// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"york","repository":"europe","path":"united-kingdom/england/york","depth":3,"parent":"united-kingdom/england","children":["clementhorpe","foss-islands"]});
export const childModules = Object.freeze({"clementhorpe":"./clementhorpe/clementhorpe.js","foss-islands":"./foss-islands/foss-islands.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
