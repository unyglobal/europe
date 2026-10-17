// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hollola","repository":"europe","path":"finland/paijat-hame/hollola","depth":3,"parent":"finland/paijat-hame","children":["tiilijarvi"]});
export const childModules = Object.freeze({"tiilijarvi":"./tiilijarvi/tiilijarvi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
