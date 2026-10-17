// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villeurbanne","repository":"europe","path":"france/auvergne-rhone-alpes/villeurbanne","depth":3,"parent":"france/auvergne-rhone-alpes","children":["quartier-ferrandiere-maisons-neuves","quartier-gratte-ciel-charmettes"]});
export const childModules = Object.freeze({"quartier-ferrandiere-maisons-neuves":"./quartier-ferrandiere-maisons-neuves/quartier-ferrandiere-maisons-neuves.js","quartier-gratte-ciel-charmettes":"./quartier-gratte-ciel-charmettes/quartier-gratte-ciel-charmettes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
