// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"an-der-kanalbrucke","repository":"europe","path":"germany/schleswig-holstein/molln/an-der-kanalbrucke","depth":4,"parent":"germany/schleswig-holstein/molln","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
