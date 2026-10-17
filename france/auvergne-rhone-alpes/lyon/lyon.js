// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lyon","repository":"europe","path":"france/auvergne-rhone-alpes/lyon","depth":3,"parent":"france/auvergne-rhone-alpes","children":["guillotiere","jean-mace","la-guillotiere","lyon-07"]});
export const childModules = Object.freeze({"guillotiere":"./guillotiere/guillotiere.js","jean-mace":"./jean-mace/jean-mace.js","la-guillotiere":"./la-guillotiere/la-guillotiere.js","lyon-07":"./lyon-07/lyon-07.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
