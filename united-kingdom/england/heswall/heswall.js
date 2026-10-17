// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heswall","repository":"europe","path":"united-kingdom/england/heswall","depth":3,"parent":"united-kingdom/england","children":["lower-village","poll-hill"]});
export const childModules = Object.freeze({"lower-village":"./lower-village/lower-village.js","poll-hill":"./poll-hill/poll-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
