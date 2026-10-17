// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"slingerbos","repository":"europe","path":"netherlands/gelderland/harderwijk/slingerbos","depth":4,"parent":"netherlands/gelderland/harderwijk","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
