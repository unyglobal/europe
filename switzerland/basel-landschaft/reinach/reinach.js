// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reinach","repository":"europe","path":"switzerland/basel-landschaft/reinach","depth":3,"parent":"switzerland/basel-landschaft","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
