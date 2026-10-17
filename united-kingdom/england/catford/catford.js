// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"catford","repository":"europe","path":"united-kingdom/england/catford","depth":3,"parent":"united-kingdom/england","children":["rushey-green"]});
export const childModules = Object.freeze({"rushey-green":"./rushey-green/rushey-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
