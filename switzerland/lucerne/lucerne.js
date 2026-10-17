// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lucerne","repository":"europe","path":"switzerland/lucerne","depth":2,"parent":"switzerland","children":["emmen","kriens","littau","luzern"]});
export const childModules = Object.freeze({"emmen":"./emmen/emmen.js","kriens":"./kriens/kriens.js","littau":"./littau/littau.js","luzern":"./luzern/luzern.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
