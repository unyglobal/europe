// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hardhorn-village","repository":"europe","path":"united-kingdom/england/poulton-le-fylde/hardhorn-village","depth":4,"parent":"united-kingdom/england/poulton-le-fylde","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
