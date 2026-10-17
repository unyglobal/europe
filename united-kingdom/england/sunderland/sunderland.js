// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sunderland","repository":"europe","path":"united-kingdom/england/sunderland","depth":3,"parent":"united-kingdom/england","children":["bishopwearmouth"]});
export const childModules = Object.freeze({"bishopwearmouth":"./bishopwearmouth/bishopwearmouth.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
