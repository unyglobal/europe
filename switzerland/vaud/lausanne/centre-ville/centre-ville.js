// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centre-ville","repository":"europe","path":"switzerland/vaud/lausanne/centre-ville","depth":4,"parent":"switzerland/vaud/lausanne","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
