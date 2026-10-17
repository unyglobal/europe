// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heves-county","repository":"europe","path":"hungary/heves-county","depth":2,"parent":"hungary","children":["eger","gyongyos","hatvan"]});
export const childModules = Object.freeze({"eger":"./eger/eger.js","gyongyos":"./gyongyos/gyongyos.js","hatvan":"./hatvan/hatvan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
