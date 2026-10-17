// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"majorna","repository":"europe","path":"sweden/vaestra-goetaland/majorna","depth":3,"parent":"sweden/vaestra-goetaland","children":["eriksberg"]});
export const childModules = Object.freeze({"eriksberg":"./eriksberg/eriksberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
