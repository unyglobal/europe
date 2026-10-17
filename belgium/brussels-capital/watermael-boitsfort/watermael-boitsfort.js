// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"watermael-boitsfort","repository":"europe","path":"belgium/brussels-capital/watermael-boitsfort","depth":3,"parent":"belgium/brussels-capital","children":["le-logis","trois-tilleuls"]});
export const childModules = Object.freeze({"le-logis":"./le-logis/le-logis.js","trois-tilleuls":"./trois-tilleuls/trois-tilleuls.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
