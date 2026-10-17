// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seaham","repository":"europe","path":"united-kingdom/england/seaham","depth":3,"parent":"united-kingdom/england","children":["deneside"]});
export const childModules = Object.freeze({"deneside":"./deneside/deneside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
