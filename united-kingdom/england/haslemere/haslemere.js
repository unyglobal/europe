// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haslemere","repository":"europe","path":"united-kingdom/england/haslemere","depth":3,"parent":"united-kingdom/england","children":["shepherd-s-hill"]});
export const childModules = Object.freeze({"shepherd-s-hill":"./shepherd-s-hill/shepherd-s-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
