// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tas-sliema","repository":"europe","path":"malta/tas-sliema","depth":2,"parent":"malta","children":["sliema"]});
export const childModules = Object.freeze({"sliema":"./sliema/sliema.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
