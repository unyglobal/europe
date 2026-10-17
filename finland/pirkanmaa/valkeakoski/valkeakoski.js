// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valkeakoski","repository":"europe","path":"finland/pirkanmaa/valkeakoski","depth":3,"parent":"finland/pirkanmaa","children":["jyraanmaki","kauppilanmaki","laiska"]});
export const childModules = Object.freeze({"jyraanmaki":"./jyraanmaki/jyraanmaki.js","kauppilanmaki":"./kauppilanmaki/kauppilanmaki.js","laiska":"./laiska/laiska.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
