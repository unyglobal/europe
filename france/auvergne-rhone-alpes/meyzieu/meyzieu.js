// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meyzieu","repository":"europe","path":"france/auvergne-rhone-alpes/meyzieu","depth":3,"parent":"france/auvergne-rhone-alpes","children":["carreau-meyzieu-gare"]});
export const childModules = Object.freeze({"carreau-meyzieu-gare":"./carreau-meyzieu-gare/carreau-meyzieu-gare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
