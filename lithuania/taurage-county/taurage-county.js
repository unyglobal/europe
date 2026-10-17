// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taurage-county","repository":"europe","path":"lithuania/taurage-county","depth":2,"parent":"lithuania","children":["taurage"]});
export const childModules = Object.freeze({"taurage":"./taurage/taurage.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
