// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ocna-mures","repository":"europe","path":"romania/alba-county/ocna-mures","depth":3,"parent":"romania/alba-county","children":["dealu-ciungii"]});
export const childModules = Object.freeze({"dealu-ciungii":"./dealu-ciungii/dealu-ciungii.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
