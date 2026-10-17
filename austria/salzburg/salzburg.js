// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salzburg","repository":"europe","path":"austria/salzburg","depth":2,"parent":"austria","children":["saalfelden-am-steinernen-meer"]});
export const childModules = Object.freeze({"saalfelden-am-steinernen-meer":"./saalfelden-am-steinernen-meer/saalfelden-am-steinernen-meer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
