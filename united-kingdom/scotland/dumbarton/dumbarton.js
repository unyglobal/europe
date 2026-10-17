// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dumbarton","repository":"europe","path":"united-kingdom/scotland/dumbarton","depth":3,"parent":"united-kingdom/scotland","children":["dennystown","kirktonhill"]});
export const childModules = Object.freeze({"dennystown":"./dennystown/dennystown.js","kirktonhill":"./kirktonhill/kirktonhill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
