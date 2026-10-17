// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luxembourg","repository":"europe","path":"luxembourg","depth":1,"parent":"","children":["esch-sur-alzette","luxembourg"]});
export const childModules = Object.freeze({"esch-sur-alzette":"./esch-sur-alzette/esch-sur-alzette.js","luxembourg":"./luxembourg/luxembourg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
