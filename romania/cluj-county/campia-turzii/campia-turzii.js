// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"campia-turzii","repository":"europe","path":"romania/cluj-county/campia-turzii","depth":3,"parent":"romania/cluj-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
