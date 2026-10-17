// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zug","repository":"europe","path":"switzerland/zug","depth":2,"parent":"switzerland","children":["baar","cham"]});
export const childModules = Object.freeze({"baar":"./baar/baar.js","cham":"./cham/cham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
