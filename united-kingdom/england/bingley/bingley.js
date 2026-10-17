// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bingley","repository":"europe","path":"united-kingdom/england/bingley","depth":3,"parent":"united-kingdom/england","children":["bailey-hills","crow-nest","old-hills"]});
export const childModules = Object.freeze({"bailey-hills":"./bailey-hills/bailey-hills.js","crow-nest":"./crow-nest/crow-nest.js","old-hills":"./old-hills/old-hills.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
