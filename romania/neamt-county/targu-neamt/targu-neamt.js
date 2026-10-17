// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"targu-neamt","repository":"europe","path":"romania/neamt-county/targu-neamt","depth":3,"parent":"romania/neamt-county","children":["mahala","vatra-targului"]});
export const childModules = Object.freeze({"mahala":"./mahala/mahala.js","vatra-targului":"./vatra-targului/vatra-targului.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
