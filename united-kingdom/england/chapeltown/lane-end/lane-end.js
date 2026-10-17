// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lane-end","repository":"europe","path":"united-kingdom/england/chapeltown/lane-end","depth":4,"parent":"united-kingdom/england/chapeltown","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
