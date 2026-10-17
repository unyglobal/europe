// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"forssa","repository":"europe","path":"finland/kanta-haeme/forssa","depth":3,"parent":"finland/kanta-haeme","children":["kuhala"]});
export const childModules = Object.freeze({"kuhala":"./kuhala/kuhala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
