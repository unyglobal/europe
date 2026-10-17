// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aberdare","repository":"europe","path":"united-kingdom/wales/aberdare","depth":3,"parent":"united-kingdom/wales","children":["gadlys","robertstown"]});
export const childModules = Object.freeze({"gadlys":"./gadlys/gadlys.js","robertstown":"./robertstown/robertstown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
