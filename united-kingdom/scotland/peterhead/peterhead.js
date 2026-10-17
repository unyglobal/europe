// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"peterhead","repository":"europe","path":"united-kingdom/scotland/peterhead","depth":3,"parent":"united-kingdom/scotland","children":["grange-gardens","green-hill","keith-inch","kirktown","roanheads"]});
export const childModules = Object.freeze({"grange-gardens":"./grange-gardens/grange-gardens.js","green-hill":"./green-hill/green-hill.js","keith-inch":"./keith-inch/keith-inch.js","kirktown":"./kirktown/kirktown.js","roanheads":"./roanheads/roanheads.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
