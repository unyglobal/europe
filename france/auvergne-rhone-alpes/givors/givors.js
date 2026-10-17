// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"givors","repository":"europe","path":"france/auvergne-rhone-alpes/givors","depth":3,"parent":"france/auvergne-rhone-alpes","children":["canal","centre-ville","plaines-varissan"]});
export const childModules = Object.freeze({"canal":"./canal/canal.js","centre-ville":"./centre-ville/centre-ville.js","plaines-varissan":"./plaines-varissan/plaines-varissan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
