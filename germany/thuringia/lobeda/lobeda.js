// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lobeda","repository":"europe","path":"germany/thuringia/lobeda","depth":3,"parent":"germany/thuringia","children":["burgau"]});
export const childModules = Object.freeze({"burgau":"./burgau/burgau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
