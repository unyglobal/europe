// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"god","repository":"europe","path":"hungary/pest-county/god","depth":3,"parent":"hungary/pest-county","children":["alsogod"]});
export const childModules = Object.freeze({"alsogod":"./alsogod/alsogod.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
