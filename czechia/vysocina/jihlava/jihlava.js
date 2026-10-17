// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jihlava","repository":"europe","path":"czechia/vysocina/jihlava","depth":3,"parent":"czechia/vysocina","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
