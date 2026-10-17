// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"portishead","repository":"europe","path":"united-kingdom/england/portishead","depth":3,"parent":"united-kingdom/england","children":["dry-hill","west-hill","woodhill"]});
export const childModules = Object.freeze({"dry-hill":"./dry-hill/dry-hill.js","west-hill":"./west-hill/west-hill.js","woodhill":"./woodhill/woodhill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
