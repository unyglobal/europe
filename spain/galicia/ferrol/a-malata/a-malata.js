// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"a-malata","repository":"europe","path":"spain/galicia/ferrol/a-malata","depth":4,"parent":"spain/galicia/ferrol","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
