// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"culemborg","repository":"europe","path":"netherlands/gelderland/culemborg","depth":3,"parent":"netherlands/gelderland","children":["terweij"]});
export const childModules = Object.freeze({"terweij":"./terweij/terweij.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
