// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lovech","repository":"europe","path":"bulgaria/lovech","depth":2,"parent":"bulgaria","children":["troyan"]});
export const childModules = Object.freeze({"troyan":"./troyan/troyan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
