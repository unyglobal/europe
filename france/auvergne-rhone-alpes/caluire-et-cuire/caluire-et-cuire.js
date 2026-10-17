// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caluire-et-cuire","repository":"europe","path":"france/auvergne-rhone-alpes/caluire-et-cuire","depth":3,"parent":"france/auvergne-rhone-alpes","children":["le-bourg","montessuy"]});
export const childModules = Object.freeze({"le-bourg":"./le-bourg/le-bourg.js","montessuy":"./montessuy/montessuy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
