// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"durham","repository":"europe","path":"united-kingdom/england/durham","depth":3,"parent":"united-kingdom/england","children":["the-sands","western-hill"]});
export const childModules = Object.freeze({"the-sands":"./the-sands/the-sands.js","western-hill":"./western-hill/western-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
