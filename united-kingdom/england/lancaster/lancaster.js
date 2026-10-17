// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lancaster","repository":"europe","path":"united-kingdom/england/lancaster","depth":3,"parent":"united-kingdom/england","children":["bulk","freehold","moorlands","primrose"]});
export const childModules = Object.freeze({"bulk":"./bulk/bulk.js","freehold":"./freehold/freehold.js","moorlands":"./moorlands/moorlands.js","primrose":"./primrose/primrose.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
