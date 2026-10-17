// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mount-hermon","repository":"europe","path":"united-kingdom/england/woking/mount-hermon","depth":4,"parent":"united-kingdom/england/woking","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
