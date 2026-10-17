// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"svilengrad","repository":"europe","path":"bulgaria/haskovo/svilengrad","depth":3,"parent":"bulgaria/haskovo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
