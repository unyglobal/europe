// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kanta-haeme","repository":"europe","path":"finland/kanta-haeme","depth":2,"parent":"finland","children":["forssa","hameenlinna","janakkala","riihimaki"]});
export const childModules = Object.freeze({"forssa":"./forssa/forssa.js","hameenlinna":"./hameenlinna/hameenlinna.js","janakkala":"./janakkala/janakkala.js","riihimaki":"./riihimaki/riihimaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
