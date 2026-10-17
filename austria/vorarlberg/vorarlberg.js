// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vorarlberg","repository":"europe","path":"austria/vorarlberg","depth":2,"parent":"austria","children":["bludenz","bregenz","dornbirn","feldkirch","hohenems","lustenau"]});
export const childModules = Object.freeze({"bludenz":"./bludenz/bludenz.js","bregenz":"./bregenz/bregenz.js","dornbirn":"./dornbirn/dornbirn.js","feldkirch":"./feldkirch/feldkirch.js","hohenems":"./hohenems/hohenems.js","lustenau":"./lustenau/lustenau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
