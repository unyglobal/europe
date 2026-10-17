// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"telsiai","repository":"europe","path":"lithuania/telsiai","depth":2,"parent":"lithuania","children":["mazeikiai","plunge"]});
export const childModules = Object.freeze({"mazeikiai":"./mazeikiai/mazeikiai.js","plunge":"./plunge/plunge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
