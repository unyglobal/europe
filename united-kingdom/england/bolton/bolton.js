// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bolton","repository":"europe","path":"united-kingdom/england/bolton","depth":3,"parent":"united-kingdom/england","children":["brownlow-fold"]});
export const childModules = Object.freeze({"brownlow-fold":"./brownlow-fold/brownlow-fold.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
