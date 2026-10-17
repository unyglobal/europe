// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bron","repository":"europe","path":"france/auvergne-rhone-alpes/bron","depth":3,"parent":"france/auvergne-rhone-alpes","children":["bron-centre","jardin-du-fort","lacouture","terraillon"]});
export const childModules = Object.freeze({"bron-centre":"./bron-centre/bron-centre.js","jardin-du-fort":"./jardin-du-fort/jardin-du-fort.js","lacouture":"./lacouture/lacouture.js","terraillon":"./terraillon/terraillon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
