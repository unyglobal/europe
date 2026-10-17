// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"campo-grande","repository":"europe","path":"portugal/lisbon/campo-grande","depth":3,"parent":"portugal/lisbon","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
