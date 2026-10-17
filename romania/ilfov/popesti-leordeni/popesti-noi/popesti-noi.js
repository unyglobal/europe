// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"popesti-noi","repository":"europe","path":"romania/ilfov/popesti-leordeni/popesti-noi","depth":4,"parent":"romania/ilfov/popesti-leordeni","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
