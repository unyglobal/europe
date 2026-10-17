// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"garbsen","repository":"europe","path":"germany/lower-saxony/garbsen","depth":3,"parent":"germany/lower-saxony","children":["auf-der-horst","garbsen-mitte"]});
export const childModules = Object.freeze({"auf-der-horst":"./auf-der-horst/auf-der-horst.js","garbsen-mitte":"./garbsen-mitte/garbsen-mitte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
