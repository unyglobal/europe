// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paisley","repository":"europe","path":"united-kingdom/scotland/paisley","depth":3,"parent":"united-kingdom/scotland","children":["carriagehill","charleston","potterhill","stanely","thornly-park"]});
export const childModules = Object.freeze({"carriagehill":"./carriagehill/carriagehill.js","charleston":"./charleston/charleston.js","potterhill":"./potterhill/potterhill.js","stanely":"./stanely/stanely.js","thornly-park":"./thornly-park/thornly-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
