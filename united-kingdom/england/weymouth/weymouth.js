// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"weymouth","repository":"europe","path":"united-kingdom/england/weymouth","depth":3,"parent":"united-kingdom/england","children":["westham"]});
export const childModules = Object.freeze({"westham":"./westham/westham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
