// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"godollo","repository":"europe","path":"hungary/pest-county/godollo","depth":3,"parent":"hungary/pest-county","children":["kozpontimajor","kutteltanya"]});
export const childModules = Object.freeze({"kozpontimajor":"./kozpontimajor/kozpontimajor.js","kutteltanya":"./kutteltanya/kutteltanya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
