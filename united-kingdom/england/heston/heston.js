// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heston","repository":"europe","path":"united-kingdom/england/heston","depth":3,"parent":"united-kingdom/england","children":["heston-east"]});
export const childModules = Object.freeze({"heston-east":"./heston-east/heston-east.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
