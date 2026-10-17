// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"radovis","repository":"europe","path":"north-macedonia/radovish/radovis","depth":3,"parent":"north-macedonia/radovish","children":["bascalak","teknelek"]});
export const childModules = Object.freeze({"bascalak":"./bascalak/bascalak.js","teknelek":"./teknelek/teknelek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
