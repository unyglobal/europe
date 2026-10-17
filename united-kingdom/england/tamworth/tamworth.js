// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tamworth","repository":"europe","path":"united-kingdom/england/tamworth","depth":3,"parent":"united-kingdom/england","children":["the-leys"]});
export const childModules = Object.freeze({"the-leys":"./the-leys/the-leys.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
