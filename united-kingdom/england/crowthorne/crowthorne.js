// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"crowthorne","repository":"europe","path":"united-kingdom/england/crowthorne","depth":3,"parent":"united-kingdom/england","children":["broadmoor-estate"]});
export const childModules = Object.freeze({"broadmoor-estate":"./broadmoor-estate/broadmoor-estate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
