// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gosport","repository":"europe","path":"united-kingdom/england/gosport","depth":3,"parent":"united-kingdom/england","children":["forton","newtown","seafield"]});
export const childModules = Object.freeze({"forton":"./forton/forton.js","newtown":"./newtown/newtown.js","seafield":"./seafield/seafield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
