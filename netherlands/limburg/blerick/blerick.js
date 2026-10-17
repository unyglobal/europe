// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blerick","repository":"europe","path":"netherlands/limburg/blerick","depth":3,"parent":"netherlands/limburg","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
