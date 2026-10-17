// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"old-swan","repository":"europe","path":"united-kingdom/england/old-swan","depth":3,"parent":"united-kingdom/england","children":["oak-hill-park","stoneycroft"]});
export const childModules = Object.freeze({"oak-hill-park":"./oak-hill-park/oak-hill-park.js","stoneycroft":"./stoneycroft/stoneycroft.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
