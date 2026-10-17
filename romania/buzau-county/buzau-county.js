// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buzau-county","repository":"europe","path":"romania/buzau-county","depth":2,"parent":"romania","children":["buzau","ramnicu-sarat"]});
export const childModules = Object.freeze({"buzau":"./buzau/buzau.js","ramnicu-sarat":"./ramnicu-sarat/ramnicu-sarat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
