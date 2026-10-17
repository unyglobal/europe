// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leatherhead","repository":"europe","path":"united-kingdom/england/leatherhead","depth":3,"parent":"united-kingdom/england","children":["fetcham-grove"]});
export const childModules = Object.freeze({"fetcham-grove":"./fetcham-grove/fetcham-grove.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
