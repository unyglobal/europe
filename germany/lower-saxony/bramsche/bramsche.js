// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bramsche","repository":"europe","path":"germany/lower-saxony/bramsche","depth":3,"parent":"germany/lower-saxony","children":["sandwisch"]});
export const childModules = Object.freeze({"sandwisch":"./sandwisch/sandwisch.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
