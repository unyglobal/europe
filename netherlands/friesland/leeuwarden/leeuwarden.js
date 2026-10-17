// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leeuwarden","repository":"europe","path":"netherlands/friesland/leeuwarden","depth":3,"parent":"netherlands/friesland","children":["hoek"]});
export const childModules = Object.freeze({"hoek":"./hoek/hoek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
