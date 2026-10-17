// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"le-havre","repository":"europe","path":"france/normandy/le-havre","depth":3,"parent":"france/normandy","children":["le-perrey"]});
export const childModules = Object.freeze({"le-perrey":"./le-perrey/le-perrey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
