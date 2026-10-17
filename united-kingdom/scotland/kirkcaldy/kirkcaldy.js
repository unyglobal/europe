// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirkcaldy","repository":"europe","path":"united-kingdom/scotland/kirkcaldy","depth":3,"parent":"united-kingdom/scotland","children":["pathhead","port-brae","wemyfield"]});
export const childModules = Object.freeze({"pathhead":"./pathhead/pathhead.js","port-brae":"./port-brae/port-brae.js","wemyfield":"./wemyfield/wemyfield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
