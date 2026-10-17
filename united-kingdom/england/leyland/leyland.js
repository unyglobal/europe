// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leyland","repository":"europe","path":"united-kingdom/england/leyland","depth":3,"parent":"united-kingdom/england","children":["golden-hill","turpin-green"]});
export const childModules = Object.freeze({"golden-hill":"./golden-hill/golden-hill.js","turpin-green":"./turpin-green/turpin-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
