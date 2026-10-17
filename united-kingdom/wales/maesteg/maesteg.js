// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maesteg","repository":"europe","path":"united-kingdom/wales/maesteg","depth":3,"parent":"united-kingdom/wales","children":["y-parc"]});
export const childModules = Object.freeze({"y-parc":"./y-parc/y-parc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
