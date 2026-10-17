// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saalfelden-am-steinernen-meer","repository":"europe","path":"austria/salzburg/saalfelden-am-steinernen-meer","depth":3,"parent":"austria/salzburg","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
