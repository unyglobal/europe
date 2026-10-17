// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"szolnok","repository":"europe","path":"hungary/jasz-nagykun-szolnok/szolnok","depth":3,"parent":"hungary/jasz-nagykun-szolnok","children":["almasytelep","piroska"]});
export const childModules = Object.freeze({"almasytelep":"./almasytelep/almasytelep.js","piroska":"./piroska/piroska.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
