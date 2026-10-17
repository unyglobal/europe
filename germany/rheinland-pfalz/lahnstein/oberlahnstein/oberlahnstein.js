// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oberlahnstein","repository":"europe","path":"germany/rheinland-pfalz/lahnstein/oberlahnstein","depth":4,"parent":"germany/rheinland-pfalz/lahnstein","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
