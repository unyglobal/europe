// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"krasnokamensk","repository":"europe","path":"russia/zabaykalskiy-transbaikal-kray/krasnokamensk","depth":3,"parent":"russia/zabaykalskiy-transbaikal-kray","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
