// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"albertville","repository":"europe","path":"france/auvergne-rhone-alpes/albertville","depth":3,"parent":"france/auvergne-rhone-alpes","children":["saint-sigismond"]});
export const childModules = Object.freeze({"saint-sigismond":"./saint-sigismond/saint-sigismond.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
