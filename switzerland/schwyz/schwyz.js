// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"schwyz","repository":"europe","path":"switzerland/schwyz","depth":2,"parent":"switzerland","children":["einsiedeln"]});
export const childModules = Object.freeze({"einsiedeln":"./einsiedeln/einsiedeln.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
