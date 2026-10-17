// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chinatown","repository":"europe","path":"italy/lombardy/chinatown","depth":3,"parent":"italy/lombardy","children":["sarpi"]});
export const childModules = Object.freeze({"sarpi":"./sarpi/sarpi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
