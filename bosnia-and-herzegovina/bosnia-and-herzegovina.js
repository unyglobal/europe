// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bosnia-and-herzegovina","repository":"europe","path":"bosnia-and-herzegovina","depth":1,"parent":"","children":["brcko","federation-of-bandh","srpska"]});
export const childModules = Object.freeze({"brcko":"./brcko/brcko.js","federation-of-bandh":"./federation-of-bandh/federation-of-bandh.js","srpska":"./srpska/srpska.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
