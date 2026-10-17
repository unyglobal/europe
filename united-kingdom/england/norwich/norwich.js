// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"norwich","repository":"europe","path":"united-kingdom/england/norwich","depth":3,"parent":"united-kingdom/england","children":["chapelfield-grove","coslany","richmond-hill","the-close","thorpe-hamlet"]});
export const childModules = Object.freeze({"chapelfield-grove":"./chapelfield-grove/chapelfield-grove.js","coslany":"./coslany/coslany.js","richmond-hill":"./richmond-hill/richmond-hill.js","the-close":"./the-close/the-close.js","thorpe-hamlet":"./thorpe-hamlet/thorpe-hamlet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
