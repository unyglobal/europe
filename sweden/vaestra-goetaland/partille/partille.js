// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"partille","repository":"europe","path":"sweden/vaestra-goetaland/partille","depth":3,"parent":"sweden/vaestra-goetaland","children":["paradiset"]});
export const childModules = Object.freeze({"paradiset":"./paradiset/paradiset.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
