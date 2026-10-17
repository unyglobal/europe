// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hazel-grove","repository":"europe","path":"united-kingdom/england/hazel-grove","depth":3,"parent":"united-kingdom/england","children":["stepping-hill","torkington"]});
export const childModules = Object.freeze({"stepping-hill":"./stepping-hill/stepping-hill.js","torkington":"./torkington/torkington.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
