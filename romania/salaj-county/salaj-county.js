// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salaj-county","repository":"europe","path":"romania/salaj-county","depth":2,"parent":"romania","children":["simleu-silvaniei","zalau"]});
export const childModules = Object.freeze({"simleu-silvaniei":"./simleu-silvaniei/simleu-silvaniei.js","zalau":"./zalau/zalau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
