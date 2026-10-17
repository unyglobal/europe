// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kendal","repository":"europe","path":"united-kingdom/england/kendal","depth":3,"parent":"united-kingdom/england","children":["kirkbarrow","the-lound"]});
export const childModules = Object.freeze({"kirkbarrow":"./kirkbarrow/kirkbarrow.js","the-lound":"./the-lound/the-lound.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
