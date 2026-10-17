// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-celle-saint-cloud","repository":"europe","path":"france/ile-de-france/la-celle-saint-cloud","depth":3,"parent":"france/ile-de-france","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
