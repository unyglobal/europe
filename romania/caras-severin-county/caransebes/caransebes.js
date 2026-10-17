// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caransebes","repository":"europe","path":"romania/caras-severin-county/caransebes","depth":3,"parent":"romania/caras-severin-county","children":["teus"]});
export const childModules = Object.freeze({"teus":"./teus/teus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
