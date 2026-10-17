// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vol-sk","repository":"europe","path":"russia/saratov-oblast/vol-sk","depth":3,"parent":"russia/saratov-oblast","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
