// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bramhall","repository":"europe","path":"united-kingdom/england/bramhall","depth":3,"parent":"united-kingdom/england","children":["kitt-s-moss","pownall-green"]});
export const childModules = Object.freeze({"kitt-s-moss":"./kitt-s-moss/kitt-s-moss.js","pownall-green":"./pownall-green/pownall-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
