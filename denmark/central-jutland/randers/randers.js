// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"randers","repository":"europe","path":"denmark/central-jutland/randers","depth":3,"parent":"denmark/central-jutland","children":["randers-c"]});
export const childModules = Object.freeze({"randers-c":"./randers-c/randers-c.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
