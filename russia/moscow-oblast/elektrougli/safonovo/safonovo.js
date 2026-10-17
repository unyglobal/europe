// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"safonovo","repository":"europe","path":"russia/moscow-oblast/elektrougli/safonovo","depth":4,"parent":"russia/moscow-oblast/elektrougli","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
