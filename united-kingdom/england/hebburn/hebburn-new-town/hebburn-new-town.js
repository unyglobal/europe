// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hebburn-new-town","repository":"europe","path":"united-kingdom/england/hebburn/hebburn-new-town","depth":4,"parent":"united-kingdom/england/hebburn","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
