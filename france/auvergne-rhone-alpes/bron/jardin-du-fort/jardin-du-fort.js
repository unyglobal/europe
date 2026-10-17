// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jardin-du-fort","repository":"europe","path":"france/auvergne-rhone-alpes/bron/jardin-du-fort","depth":4,"parent":"france/auvergne-rhone-alpes/bron","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
