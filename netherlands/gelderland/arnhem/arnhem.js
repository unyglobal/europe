// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arnhem","repository":"europe","path":"netherlands/gelderland/arnhem","depth":3,"parent":"netherlands/gelderland","children":["klarendal","musiskwartier"]});
export const childModules = Object.freeze({"klarendal":"./klarendal/klarendal.js","musiskwartier":"./musiskwartier/musiskwartier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
