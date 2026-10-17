// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"molln","repository":"europe","path":"germany/schleswig-holstein/molln","depth":3,"parent":"germany/schleswig-holstein","children":["an-der-kanalbrucke"]});
export const childModules = Object.freeze({"an-der-kanalbrucke":"./an-der-kanalbrucke/an-der-kanalbrucke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
