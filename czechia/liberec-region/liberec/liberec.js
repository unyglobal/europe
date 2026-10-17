// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"liberec","repository":"europe","path":"czechia/liberec-region/liberec","depth":3,"parent":"czechia/liberec-region","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
