// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"falkenberg","repository":"europe","path":"sweden/halland/falkenberg","depth":3,"parent":"sweden/halland","children":["anderstorp","gullhagen"]});
export const childModules = Object.freeze({"anderstorp":"./anderstorp/anderstorp.js","gullhagen":"./gullhagen/gullhagen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
