// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tassin-la-demi-lune","repository":"europe","path":"france/auvergne-rhone-alpes/tassin-la-demi-lune","depth":3,"parent":"france/auvergne-rhone-alpes","children":["champvert-point-du-jour-jeunet","menival-battieres-la-plaine"]});
export const childModules = Object.freeze({"champvert-point-du-jour-jeunet":"./champvert-point-du-jour-jeunet/champvert-point-du-jour-jeunet.js","menival-battieres-la-plaine":"./menival-battieres-la-plaine/menival-battieres-la-plaine.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
