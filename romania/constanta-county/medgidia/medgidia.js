// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"medgidia","repository":"europe","path":"romania/constanta-county/medgidia","depth":3,"parent":"romania/constanta-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
