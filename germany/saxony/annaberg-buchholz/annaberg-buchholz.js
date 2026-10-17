// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"annaberg-buchholz","repository":"europe","path":"germany/saxony/annaberg-buchholz","depth":3,"parent":"germany/saxony","children":["annaberg"]});
export const childModules = Object.freeze({"annaberg":"./annaberg/annaberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
