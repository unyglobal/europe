// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newton-le-willows","repository":"europe","path":"united-kingdom/england/newton-le-willows","depth":3,"parent":"united-kingdom/england","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
