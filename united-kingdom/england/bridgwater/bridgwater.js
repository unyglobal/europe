// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bridgwater","repository":"europe","path":"united-kingdom/england/bridgwater","depth":3,"parent":"united-kingdom/england","children":["eastover","newtown","northfield"]});
export const childModules = Object.freeze({"eastover":"./eastover/eastover.js","newtown":"./newtown/newtown.js","northfield":"./northfield/northfield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
