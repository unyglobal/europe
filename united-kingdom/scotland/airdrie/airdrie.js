// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"airdrie","repository":"europe","path":"united-kingdom/scotland/airdrie","depth":3,"parent":"united-kingdom/scotland","children":["gartlea","rawyards"]});
export const childModules = Object.freeze({"gartlea":"./gartlea/gartlea.js","rawyards":"./rawyards/rawyards.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
