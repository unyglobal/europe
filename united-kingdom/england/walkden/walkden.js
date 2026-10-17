// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"walkden","repository":"europe","path":"united-kingdom/england/walkden","depth":3,"parent":"united-kingdom/england","children":["parr-fold"]});
export const childModules = Object.freeze({"parr-fold":"./parr-fold/parr-fold.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
