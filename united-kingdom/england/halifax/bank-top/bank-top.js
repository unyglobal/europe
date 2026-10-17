// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bank-top","repository":"europe","path":"united-kingdom/england/halifax/bank-top","depth":4,"parent":"united-kingdom/england/halifax","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
