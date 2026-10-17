// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chriblice","repository":"europe","path":"czechia/hradec-kralove-region/trutnov/chriblice","depth":4,"parent":"czechia/hradec-kralove-region/trutnov","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
