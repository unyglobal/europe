// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kingswood","repository":"europe","path":"united-kingdom/england/kingswood","depth":3,"parent":"united-kingdom/england","children":["mount-hill","potterswood"]});
export const childModules = Object.freeze({"mount-hill":"./mount-hill/mount-hill.js","potterswood":"./potterswood/potterswood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
