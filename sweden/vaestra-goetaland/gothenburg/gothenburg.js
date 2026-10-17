// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gothenburg","repository":"europe","path":"sweden/vaestra-goetaland/gothenburg","depth":3,"parent":"sweden/vaestra-goetaland","children":["nordstaden"]});
export const childModules = Object.freeze({"nordstaden":"./nordstaden/nordstaden.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
