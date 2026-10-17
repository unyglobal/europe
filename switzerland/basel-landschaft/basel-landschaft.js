// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basel-landschaft","repository":"europe","path":"switzerland/basel-landschaft","depth":2,"parent":"switzerland","children":["allschwil","muttenz","reinach"]});
export const childModules = Object.freeze({"allschwil":"./allschwil/allschwil.js","muttenz":"./muttenz/muttenz.js","reinach":"./reinach/reinach.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
