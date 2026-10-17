// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"utena","repository":"europe","path":"lithuania/utena","depth":2,"parent":"lithuania","children":["visaginas"]});
export const childModules = Object.freeze({"visaginas":"./visaginas/visaginas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
