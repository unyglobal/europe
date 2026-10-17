// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chadderton","repository":"europe","path":"united-kingdom/england/chadderton","depth":3,"parent":"united-kingdom/england","children":["stock-brook"]});
export const childModules = Object.freeze({"stock-brook":"./stock-brook/stock-brook.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
