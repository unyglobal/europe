// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"skien","repository":"europe","path":"norway/telemark/skien","depth":3,"parent":"norway/telemark","children":["falkum","frogner","hjellen"]});
export const childModules = Object.freeze({"falkum":"./falkum/falkum.js","frogner":"./frogner/frogner.js","hjellen":"./hjellen/hjellen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
