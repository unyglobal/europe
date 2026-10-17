// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"solothurn","repository":"europe","path":"switzerland/solothurn","depth":2,"parent":"switzerland","children":["grenchen","olten"]});
export const childModules = Object.freeze({"grenchen":"./grenchen/grenchen.js","olten":"./olten/olten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
