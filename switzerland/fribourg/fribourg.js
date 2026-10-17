// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fribourg","repository":"europe","path":"switzerland/fribourg","depth":2,"parent":"switzerland","children":["bulle"]});
export const childModules = Object.freeze({"bulle":"./bulle/bulle.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
