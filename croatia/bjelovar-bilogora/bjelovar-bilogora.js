// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bjelovar-bilogora","repository":"europe","path":"croatia/bjelovar-bilogora","depth":2,"parent":"croatia","children":["bjelovar"]});
export const childModules = Object.freeze({"bjelovar":"./bjelovar/bjelovar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
