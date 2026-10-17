// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bacau","repository":"europe","path":"romania/bacau-county/bacau","depth":3,"parent":"romania/bacau-county","children":["vasile-roaita"]});
export const childModules = Object.freeze({"vasile-roaita":"./vasile-roaita/vasile-roaita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
