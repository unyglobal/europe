// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atherton","repository":"europe","path":"united-kingdom/england/atherton","depth":3,"parent":"united-kingdom/england","children":["hag-fold"]});
export const childModules = Object.freeze({"hag-fold":"./hag-fold/hag-fold.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
