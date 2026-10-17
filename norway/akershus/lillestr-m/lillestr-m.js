// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lillestr-m","repository":"europe","path":"norway/akershus/lillestr-m","depth":3,"parent":"norway/akershus","children":["volla"]});
export const childModules = Object.freeze({"volla":"./volla/volla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
