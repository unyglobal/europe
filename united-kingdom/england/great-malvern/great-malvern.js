// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"great-malvern","repository":"europe","path":"united-kingdom/england/great-malvern","depth":3,"parent":"united-kingdom/england","children":["barnard-s-green","link-top"]});
export const childModules = Object.freeze({"barnard-s-green":"./barnard-s-green/barnard-s-green.js","link-top":"./link-top/link-top.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
