// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vastaboland","repository":"europe","path":"finland/southwest-finland/vastaboland","depth":3,"parent":"finland/southwest-finland","children":["malmen","parsby"]});
export const childModules = Object.freeze({"malmen":"./malmen/malmen.js","parsby":"./parsby/parsby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
