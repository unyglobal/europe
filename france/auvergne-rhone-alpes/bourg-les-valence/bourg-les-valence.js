// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bourg-les-valence","repository":"europe","path":"france/auvergne-rhone-alpes/bourg-les-valence","depth":3,"parent":"france/auvergne-rhone-alpes","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
