// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ledziny","repository":"europe","path":"poland/silesia/ledziny","depth":3,"parent":"poland/silesia","children":["ho-dunow-nowy","ho-dunow-stary"]});
export const childModules = Object.freeze({"ho-dunow-nowy":"./ho-dunow-nowy/ho-dunow-nowy.js","ho-dunow-stary":"./ho-dunow-stary/ho-dunow-stary.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
