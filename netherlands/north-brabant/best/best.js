// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"best","repository":"europe","path":"netherlands/north-brabant/best","depth":3,"parent":"netherlands/north-brabant","children":["naastenbest","salderes"]});
export const childModules = Object.freeze({"naastenbest":"./naastenbest/naastenbest.js","salderes":"./salderes/salderes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
