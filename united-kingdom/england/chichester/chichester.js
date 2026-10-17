// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chichester","repository":"europe","path":"united-kingdom/england/chichester","depth":3,"parent":"united-kingdom/england","children":["the-close"]});
export const childModules = Object.freeze({"the-close":"./the-close/the-close.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
