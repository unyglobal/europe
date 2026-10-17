// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bacau-county","repository":"europe","path":"romania/bacau-county","depth":2,"parent":"romania","children":["bacau","buhusi","comanesti","moinesti"]});
export const childModules = Object.freeze({"bacau":"./bacau/bacau.js","buhusi":"./buhusi/buhusi.js","comanesti":"./comanesti/comanesti.js","moinesti":"./moinesti/moinesti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
