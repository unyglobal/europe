// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aargau","repository":"europe","path":"switzerland/aargau","depth":2,"parent":"switzerland","children":["aarau","baden","wettingen"]});
export const childModules = Object.freeze({"aarau":"./aarau/aarau.js","baden":"./baden/baden.js","wettingen":"./wettingen/wettingen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
