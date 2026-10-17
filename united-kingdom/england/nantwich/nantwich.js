// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nantwich","repository":"europe","path":"united-kingdom/england/nantwich","depth":3,"parent":"united-kingdom/england","children":["snow-hill"]});
export const childModules = Object.freeze({"snow-hill":"./snow-hill/snow-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
