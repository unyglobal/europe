// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"am-ring","repository":"europe","path":"switzerland/basel-city/basel/am-ring","depth":4,"parent":"switzerland/basel-city/basel","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
