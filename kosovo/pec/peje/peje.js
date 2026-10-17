// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"peje","repository":"europe","path":"kosovo/pec/peje","depth":3,"parent":"kosovo/pec","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
