// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manor-park","repository":"europe","path":"united-kingdom/england/aylesbury/manor-park","depth":4,"parent":"united-kingdom/england/aylesbury","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
