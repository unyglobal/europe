// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karlskrona","repository":"europe","path":"sweden/blekinge/karlskrona","depth":3,"parent":"sweden/blekinge","children":["pantarholmen"]});
export const childModules = Object.freeze({"pantarholmen":"./pantarholmen/pantarholmen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
