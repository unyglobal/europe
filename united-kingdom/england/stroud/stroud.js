// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stroud","repository":"europe","path":"united-kingdom/england/stroud","depth":3,"parent":"united-kingdom/england","children":["mount-pleasant","stroud-hill","uplands"]});
export const childModules = Object.freeze({"mount-pleasant":"./mount-pleasant/mount-pleasant.js","stroud-hill":"./stroud-hill/stroud-hill.js","uplands":"./uplands/uplands.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
