// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"winchester","repository":"europe","path":"united-kingdom/england/winchester","depth":3,"parent":"united-kingdom/england","children":["fulflood","hyde","the-close"]});
export const childModules = Object.freeze({"fulflood":"./fulflood/fulflood.js","hyde":"./hyde/hyde.js","the-close":"./the-close/the-close.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
