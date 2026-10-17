// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hameenlinna","repository":"europe","path":"finland/kanta-haeme/hameenlinna","depth":3,"parent":"finland/kanta-haeme","children":["asemanranta","linnanniemi"]});
export const childModules = Object.freeze({"asemanranta":"./asemanranta/asemanranta.js","linnanniemi":"./linnanniemi/linnanniemi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
