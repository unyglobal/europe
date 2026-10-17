// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keynsham","repository":"europe","path":"united-kingdom/england/keynsham","depth":3,"parent":"united-kingdom/england","children":["somerdale"]});
export const childModules = Object.freeze({"somerdale":"./somerdale/somerdale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
