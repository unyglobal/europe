// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ramnicu-valcea","repository":"europe","path":"romania/valcea-county/ramnicu-valcea","depth":3,"parent":"romania/valcea-county","children":["argintari","inatesti","schitu-slatioarele"]});
export const childModules = Object.freeze({"argintari":"./argintari/argintari.js","inatesti":"./inatesti/inatesti.js","schitu-slatioarele":"./schitu-slatioarele/schitu-slatioarele.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
