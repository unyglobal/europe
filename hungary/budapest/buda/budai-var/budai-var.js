// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"budai-var","repository":"europe","path":"hungary/budapest/buda/budai-var","depth":4,"parent":"hungary/budapest/buda","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
