// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nograd","repository":"europe","path":"hungary/nograd","depth":2,"parent":"hungary","children":["salgotarjan"]});
export const childModules = Object.freeze({"salgotarjan":"./salgotarjan/salgotarjan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
