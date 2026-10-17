// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buskerud","repository":"europe","path":"norway/buskerud","depth":2,"parent":"norway","children":["drammen","kongsberg"]});
export const childModules = Object.freeze({"drammen":"./drammen/drammen.js","kongsberg":"./kongsberg/kongsberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
