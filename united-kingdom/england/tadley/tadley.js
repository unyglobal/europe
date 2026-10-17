// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tadley","repository":"europe","path":"united-kingdom/england/tadley","depth":3,"parent":"united-kingdom/england","children":["tadley-bottom","tadley-hill"]});
export const childModules = Object.freeze({"tadley-bottom":"./tadley-bottom/tadley-bottom.js","tadley-hill":"./tadley-hill/tadley-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
