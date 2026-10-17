// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kettering","repository":"europe","path":"united-kingdom/england/kettering","depth":3,"parent":"united-kingdom/england","children":["wadcroft"]});
export const childModules = Object.freeze({"wadcroft":"./wadcroft/wadcroft.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
