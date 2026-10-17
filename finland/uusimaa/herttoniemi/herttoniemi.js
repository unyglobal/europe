// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"herttoniemi","repository":"europe","path":"finland/uusimaa/herttoniemi","depth":3,"parent":"finland/uusimaa","children":["herttoniemen-yritysalue"]});
export const childModules = Object.freeze({"herttoniemen-yritysalue":"./herttoniemen-yritysalue/herttoniemen-yritysalue.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
