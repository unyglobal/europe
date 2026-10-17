// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carinthia","repository":"europe","path":"austria/carinthia","depth":2,"parent":"austria","children":["klagenfurt-am-worthersee","sankt-martin","villach","wolfsberg"]});
export const childModules = Object.freeze({"klagenfurt-am-worthersee":"./klagenfurt-am-worthersee/klagenfurt-am-worthersee.js","sankt-martin":"./sankt-martin/sankt-martin.js","villach":"./villach/villach.js","wolfsberg":"./wolfsberg/wolfsberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
