// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"italien","repository":"europe","path":"luxembourg/esch-sur-alzette/dudelange/italien","depth":4,"parent":"luxembourg/esch-sur-alzette/dudelange","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
