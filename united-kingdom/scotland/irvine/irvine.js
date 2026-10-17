// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"irvine","repository":"europe","path":"united-kingdom/scotland/irvine","depth":3,"parent":"united-kingdom/scotland","children":["girdle-toll"]});
export const childModules = Object.freeze({"girdle-toll":"./girdle-toll/girdle-toll.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
