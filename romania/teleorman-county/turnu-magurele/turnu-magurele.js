// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turnu-magurele","repository":"europe","path":"romania/teleorman-county/turnu-magurele","depth":3,"parent":"romania/teleorman-county","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
