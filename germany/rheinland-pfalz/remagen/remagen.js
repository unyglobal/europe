// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"remagen","repository":"europe","path":"germany/rheinland-pfalz/remagen","depth":3,"parent":"germany/rheinland-pfalz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
