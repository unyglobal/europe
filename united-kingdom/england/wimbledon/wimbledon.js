// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wimbledon","repository":"europe","path":"united-kingdom/england/wimbledon","depth":3,"parent":"united-kingdom/england","children":["hillside"]});
export const childModules = Object.freeze({"hillside":"./hillside/hillside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
