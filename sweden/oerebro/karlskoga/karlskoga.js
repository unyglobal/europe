// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karlskoga","repository":"europe","path":"sweden/oerebro/karlskoga","depth":3,"parent":"sweden/oerebro","children":["bofors"]});
export const childModules = Object.freeze({"bofors":"./bofors/bofors.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
