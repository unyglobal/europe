// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-paul-s-bay","repository":"europe","path":"malta/saint-paul-s-bay","depth":2,"parent":"malta","children":["san-pawl-il-ba-ar"]});
export const childModules = Object.freeze({"san-pawl-il-ba-ar":"./san-pawl-il-ba-ar/san-pawl-il-ba-ar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
