// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"westhoughton","repository":"europe","path":"united-kingdom/england/westhoughton","depth":3,"parent":"united-kingdom/england","children":["dobb-brow"]});
export const childModules = Object.freeze({"dobb-brow":"./dobb-brow/dobb-brow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
