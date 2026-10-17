// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"crete","repository":"europe","path":"greece/crete","depth":2,"parent":"greece","children":["chania","irakleion","rethymno"]});
export const childModules = Object.freeze({"chania":"./chania/chania.js","irakleion":"./irakleion/irakleion.js","rethymno":"./rethymno/rethymno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
