// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marchienne-au-pont","repository":"europe","path":"belgium/wallonia/marchienne-au-pont","depth":3,"parent":"belgium/wallonia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
