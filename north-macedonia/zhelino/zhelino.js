// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zhelino","repository":"europe","path":"north-macedonia/zhelino","depth":2,"parent":"north-macedonia","children":["zelino"]});
export const childModules = Object.freeze({"zelino":"./zelino/zelino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
