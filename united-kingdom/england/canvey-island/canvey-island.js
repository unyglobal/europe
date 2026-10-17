// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canvey-island","repository":"europe","path":"united-kingdom/england/canvey-island","depth":3,"parent":"united-kingdom/england","children":["winter-gardens"]});
export const childModules = Object.freeze({"winter-gardens":"./winter-gardens/winter-gardens.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
