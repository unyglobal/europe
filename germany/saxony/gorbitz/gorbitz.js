// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorbitz","repository":"europe","path":"germany/saxony/gorbitz","depth":3,"parent":"germany/saxony","children":["gorbitz-nord-neu-omsewitz","gorbitz-sud"]});
export const childModules = Object.freeze({"gorbitz-nord-neu-omsewitz":"./gorbitz-nord-neu-omsewitz/gorbitz-nord-neu-omsewitz.js","gorbitz-sud":"./gorbitz-sud/gorbitz-sud.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
