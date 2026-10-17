// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"les-sables-d-olonne","repository":"europe","path":"france/pays-de-la-loire/les-sables-d-olonne","depth":3,"parent":"france/pays-de-la-loire","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
