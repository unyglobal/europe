// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hucknall","repository":"europe","path":"united-kingdom/england/hucknall","depth":3,"parent":"united-kingdom/england","children":["broomhill","butler-s-hill","hazelgrove"]});
export const childModules = Object.freeze({"broomhill":"./broomhill/broomhill.js","butler-s-hill":"./butler-s-hill/butler-s-hill.js","hazelgrove":"./hazelgrove/hazelgrove.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
