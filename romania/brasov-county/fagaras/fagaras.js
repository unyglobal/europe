// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fagaras","repository":"europe","path":"romania/brasov-county/fagaras","depth":3,"parent":"romania/brasov-county","children":["galati"]});
export const childModules = Object.freeze({"galati":"./galati/galati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
