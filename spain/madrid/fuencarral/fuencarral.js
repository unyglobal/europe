// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fuencarral","repository":"europe","path":"spain/madrid/fuencarral","depth":3,"parent":"spain/madrid","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
