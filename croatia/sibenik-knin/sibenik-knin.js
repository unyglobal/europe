// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sibenik-knin","repository":"europe","path":"croatia/sibenik-knin","depth":2,"parent":"croatia","children":["sibenik"]});
export const childModules = Object.freeze({"sibenik":"./sibenik/sibenik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
