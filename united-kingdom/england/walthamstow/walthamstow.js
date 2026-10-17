// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"walthamstow","repository":"europe","path":"united-kingdom/england/walthamstow","depth":3,"parent":"united-kingdom/england","children":["william-morris"]});
export const childModules = Object.freeze({"william-morris":"./william-morris/william-morris.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
