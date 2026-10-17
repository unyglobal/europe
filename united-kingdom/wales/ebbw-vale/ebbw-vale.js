// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ebbw-vale","repository":"europe","path":"united-kingdom/wales/ebbw-vale","depth":3,"parent":"united-kingdom/wales","children":["briery-hill","hilltop","newtown","pont-y-gof","willowtown"]});
export const childModules = Object.freeze({"briery-hill":"./briery-hill/briery-hill.js","hilltop":"./hilltop/hilltop.js","newtown":"./newtown/newtown.js","pont-y-gof":"./pont-y-gof/pont-y-gof.js","willowtown":"./willowtown/willowtown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
