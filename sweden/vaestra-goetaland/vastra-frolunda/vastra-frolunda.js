// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vastra-frolunda","repository":"europe","path":"sweden/vaestra-goetaland/vastra-frolunda","depth":3,"parent":"sweden/vaestra-goetaland","children":["jarnbrott"]});
export const childModules = Object.freeze({"jarnbrott":"./jarnbrott/jarnbrott.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
