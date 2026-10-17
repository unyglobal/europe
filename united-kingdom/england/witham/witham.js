// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"witham","repository":"europe","path":"united-kingdom/england/witham","depth":3,"parent":"united-kingdom/england","children":["chipping-hill"]});
export const childModules = Object.freeze({"chipping-hill":"./chipping-hill/chipping-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
