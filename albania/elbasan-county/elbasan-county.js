// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"elbasan-county","repository":"europe","path":"albania/elbasan-county","depth":2,"parent":"albania","children":["elbasan","librazhd","peqin"]});
export const childModules = Object.freeze({"elbasan":"./elbasan/elbasan.js","librazhd":"./librazhd/librazhd.js","peqin":"./peqin/peqin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
