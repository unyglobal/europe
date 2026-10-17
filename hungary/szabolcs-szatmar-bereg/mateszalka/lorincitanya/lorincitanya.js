// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lorincitanya","repository":"europe","path":"hungary/szabolcs-szatmar-bereg/mateszalka/lorincitanya","depth":4,"parent":"hungary/szabolcs-szatmar-bereg/mateszalka","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
