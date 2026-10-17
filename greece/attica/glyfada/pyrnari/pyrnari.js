// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pyrnari","repository":"europe","path":"greece/attica/glyfada/pyrnari","depth":4,"parent":"greece/attica/glyfada","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
