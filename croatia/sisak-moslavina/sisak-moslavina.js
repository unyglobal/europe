// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sisak-moslavina","repository":"europe","path":"croatia/sisak-moslavina","depth":2,"parent":"croatia","children":["sisak"]});
export const childModules = Object.freeze({"sisak":"./sisak/sisak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
