// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centar","repository":"europe","path":"croatia/zagreb/centar","depth":3,"parent":"croatia/zagreb","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
