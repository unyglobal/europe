// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"schela-mare","repository":"europe","path":"romania/dambovita-county/moreni/schela-mare","depth":4,"parent":"romania/dambovita-county/moreni","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
