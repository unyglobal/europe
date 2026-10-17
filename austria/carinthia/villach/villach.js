// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villach","repository":"europe","path":"austria/carinthia/villach","depth":3,"parent":"austria/carinthia","children":["st-agathen-und-perau","villach-innere-stadt"]});
export const childModules = Object.freeze({"st-agathen-und-perau":"./st-agathen-und-perau/st-agathen-und-perau.js","villach-innere-stadt":"./villach-innere-stadt/villach-innere-stadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
