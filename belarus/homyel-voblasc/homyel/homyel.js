// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"homyel","repository":"europe","path":"belarus/homyel-voblasc/homyel","depth":3,"parent":"belarus/homyel-voblasc","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
