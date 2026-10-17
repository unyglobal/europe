// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urk","repository":"europe","path":"netherlands/flevoland/urk","depth":3,"parent":"netherlands/flevoland","children":["top"]});
export const childModules = Object.freeze({"top":"./top/top.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
