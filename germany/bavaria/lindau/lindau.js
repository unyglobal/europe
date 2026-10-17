// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lindau","repository":"europe","path":"germany/bavaria/lindau","depth":3,"parent":"germany/bavaria","children":["holdereggen"]});
export const childModules = Object.freeze({"holdereggen":"./holdereggen/holdereggen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
