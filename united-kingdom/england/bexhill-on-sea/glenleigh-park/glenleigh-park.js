// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"glenleigh-park","repository":"europe","path":"united-kingdom/england/bexhill-on-sea/glenleigh-park","depth":4,"parent":"united-kingdom/england/bexhill-on-sea","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
