// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pervouralsk","repository":"europe","path":"russia/sverdlovsk-oblast/pervouralsk","depth":3,"parent":"russia/sverdlovsk-oblast","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
