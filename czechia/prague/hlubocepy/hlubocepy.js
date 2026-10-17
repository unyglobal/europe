// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hlubocepy","repository":"europe","path":"czechia/prague/hlubocepy","depth":3,"parent":"czechia/prague","children":["barrandov","zlichov"]});
export const childModules = Object.freeze({"barrandov":"./barrandov/barrandov.js","zlichov":"./zlichov/zlichov.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
