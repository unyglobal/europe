// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leninskaya-sloboda","repository":"europe","path":"russia/moscow-oblast/fryazino/leninskaya-sloboda","depth":4,"parent":"russia/moscow-oblast/fryazino","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
