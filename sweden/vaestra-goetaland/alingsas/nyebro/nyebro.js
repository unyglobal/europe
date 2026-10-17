// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nyebro","repository":"europe","path":"sweden/vaestra-goetaland/alingsas/nyebro","depth":4,"parent":"sweden/vaestra-goetaland/alingsas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
