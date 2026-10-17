// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"il-amra","repository":"europe","path":"malta/saint-paul-s-bay/san-pawl-il-ba-ar/il-amra","depth":4,"parent":"malta/saint-paul-s-bay/san-pawl-il-ba-ar","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
