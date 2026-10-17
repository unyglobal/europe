// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kantrekula","repository":"europe","path":"estonia/viljandimaa/viljandi/kantrekula","depth":4,"parent":"estonia/viljandimaa/viljandi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
