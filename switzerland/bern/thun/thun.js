// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thun","repository":"europe","path":"switzerland/bern/thun","depth":3,"parent":"switzerland/bern","children":["hohmad","seefeld","westquartier"]});
export const childModules = Object.freeze({"hohmad":"./hohmad/hohmad.js","seefeld":"./seefeld/seefeld.js","westquartier":"./westquartier/westquartier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
