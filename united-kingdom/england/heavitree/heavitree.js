// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heavitree","repository":"europe","path":"united-kingdom/england/heavitree","depth":3,"parent":"united-kingdom/england","children":["st-loyes","wonford"]});
export const childModules = Object.freeze({"st-loyes":"./st-loyes/st-loyes.js","wonford":"./wonford/wonford.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
