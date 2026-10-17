// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chalons-en-champagne","repository":"europe","path":"france/grand-est/chalons-en-champagne","depth":3,"parent":"france/grand-est","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
