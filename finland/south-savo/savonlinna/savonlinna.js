// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"savonlinna","repository":"europe","path":"finland/south-savo/savonlinna","depth":3,"parent":"finland/south-savo","children":["piispanmaki","savonniemi"]});
export const childModules = Object.freeze({"piispanmaki":"./piispanmaki/piispanmaki.js","savonniemi":"./savonniemi/savonniemi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
