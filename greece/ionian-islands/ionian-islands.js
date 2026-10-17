// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ionian-islands","repository":"europe","path":"greece/ionian-islands","depth":2,"parent":"greece","children":["corfu"]});
export const childModules = Object.freeze({"corfu":"./corfu/corfu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
