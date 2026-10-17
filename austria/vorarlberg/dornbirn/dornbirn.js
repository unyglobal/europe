// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dornbirn","repository":"europe","path":"austria/vorarlberg/dornbirn","depth":3,"parent":"austria/vorarlberg","children":["oberdorf"]});
export const childModules = Object.freeze({"oberdorf":"./oberdorf/oberdorf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
