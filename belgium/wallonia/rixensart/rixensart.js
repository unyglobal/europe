// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rixensart","repository":"europe","path":"belgium/wallonia/rixensart","depth":3,"parent":"belgium/wallonia","children":["le-glain"]});
export const childModules = Object.freeze({"le-glain":"./le-glain/le-glain.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
