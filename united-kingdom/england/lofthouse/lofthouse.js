// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lofthouse","repository":"europe","path":"united-kingdom/england/lofthouse","depth":3,"parent":"united-kingdom/england","children":["langley"]});
export const childModules = Object.freeze({"langley":"./langley/langley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
