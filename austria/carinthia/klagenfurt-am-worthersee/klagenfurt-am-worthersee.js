// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"klagenfurt-am-worthersee","repository":"europe","path":"austria/carinthia/klagenfurt-am-worthersee","depth":3,"parent":"austria/carinthia","children":["1-bezirk","2-bezirk","3-bezirk","4-bezirk","innere-stadt"]});
export const childModules = Object.freeze({"1-bezirk":"./1-bezirk/1-bezirk.js","2-bezirk":"./2-bezirk/2-bezirk.js","3-bezirk":"./3-bezirk/3-bezirk.js","4-bezirk":"./4-bezirk/4-bezirk.js","innere-stadt":"./innere-stadt/innere-stadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
