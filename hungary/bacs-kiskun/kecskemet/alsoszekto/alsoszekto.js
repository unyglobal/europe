// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alsoszekto","repository":"europe","path":"hungary/bacs-kiskun/kecskemet/alsoszekto","depth":4,"parent":"hungary/bacs-kiskun/kecskemet","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
