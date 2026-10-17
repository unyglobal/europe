// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belper","repository":"europe","path":"united-kingdom/england/belper","depth":3,"parent":"united-kingdom/england","children":["cowhill"]});
export const childModules = Object.freeze({"cowhill":"./cowhill/cowhill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
