// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burnley","repository":"europe","path":"united-kingdom/england/burnley","depth":3,"parent":"united-kingdom/england","children":["burnley-lane","heasandford"]});
export const childModules = Object.freeze({"burnley-lane":"./burnley-lane/burnley-lane.js","heasandford":"./heasandford/heasandford.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
