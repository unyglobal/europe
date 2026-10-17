// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"epirus","repository":"europe","path":"greece/epirus","depth":2,"parent":"greece","children":["arta","ioannina","preveza"]});
export const childModules = Object.freeze({"arta":"./arta/arta.js","ioannina":"./ioannina/ioannina.js","preveza":"./preveza/preveza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
