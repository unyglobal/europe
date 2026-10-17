// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carter-knowle","repository":"europe","path":"united-kingdom/england/nether-edge/carter-knowle","depth":4,"parent":"united-kingdom/england/nether-edge","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
