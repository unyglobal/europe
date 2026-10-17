// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ty-n-y-caeau","repository":"europe","path":"united-kingdom/wales/neath/ty-n-y-caeau","depth":4,"parent":"united-kingdom/wales/neath","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
