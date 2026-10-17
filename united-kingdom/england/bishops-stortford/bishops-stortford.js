// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bishops-stortford","repository":"europe","path":"united-kingdom/england/bishops-stortford","depth":3,"parent":"united-kingdom/england","children":["hockerill","new-town"]});
export const childModules = Object.freeze({"hockerill":"./hockerill/hockerill.js","new-town":"./new-town/new-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
