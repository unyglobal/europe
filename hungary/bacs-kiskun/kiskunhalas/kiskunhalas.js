// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kiskunhalas","repository":"europe","path":"hungary/bacs-kiskun/kiskunhalas","depth":3,"parent":"hungary/bacs-kiskun","children":["alsofeketefoldek","iparszolok"]});
export const childModules = Object.freeze({"alsofeketefoldek":"./alsofeketefoldek/alsofeketefoldek.js","iparszolok":"./iparszolok/iparszolok.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
