// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"g-owne-miasto","repository":"europe","path":"poland/pomerania/gdansk/g-owne-miasto","depth":4,"parent":"poland/pomerania/gdansk","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
