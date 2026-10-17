// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dealu-ciungii","repository":"europe","path":"romania/alba-county/ocna-mures/dealu-ciungii","depth":4,"parent":"romania/alba-county/ocna-mures","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
