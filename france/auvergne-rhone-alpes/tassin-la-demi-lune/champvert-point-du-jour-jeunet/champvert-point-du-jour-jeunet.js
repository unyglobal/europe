// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"champvert-point-du-jour-jeunet","repository":"europe","path":"france/auvergne-rhone-alpes/tassin-la-demi-lune/champvert-point-du-jour-jeunet","depth":4,"parent":"france/auvergne-rhone-alpes/tassin-la-demi-lune","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
