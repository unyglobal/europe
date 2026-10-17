// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaulx-en-velin","repository":"europe","path":"france/auvergne-rhone-alpes/vaulx-en-velin","depth":3,"parent":"france/auvergne-rhone-alpes","children":["village"]});
export const childModules = Object.freeze({"village":"./village/village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
