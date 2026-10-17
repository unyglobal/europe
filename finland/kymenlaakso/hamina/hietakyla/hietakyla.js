// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hietakyla","repository":"europe","path":"finland/kymenlaakso/hamina/hietakyla","depth":4,"parent":"finland/kymenlaakso/hamina","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
