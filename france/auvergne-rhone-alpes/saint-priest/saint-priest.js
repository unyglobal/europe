// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-priest","repository":"europe","path":"france/auvergne-rhone-alpes/saint-priest","depth":3,"parent":"france/auvergne-rhone-alpes","children":["menival-la-cordiere","plaine-de-saythe-bel-air"]});
export const childModules = Object.freeze({"menival-la-cordiere":"./menival-la-cordiere/menival-la-cordiere.js","plaine-de-saythe-bel-air":"./plaine-de-saythe-bel-air/plaine-de-saythe-bel-air.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
