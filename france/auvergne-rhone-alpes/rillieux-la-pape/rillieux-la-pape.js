// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rillieux-la-pape","repository":"europe","path":"france/auvergne-rhone-alpes/rillieux-la-pape","depth":3,"parent":"france/auvergne-rhone-alpes","children":["alagniers","europe-mont-blanc","piamateur-semailles","rillieux-village","velette"]});
export const childModules = Object.freeze({"alagniers":"./alagniers/alagniers.js","europe-mont-blanc":"./europe-mont-blanc/europe-mont-blanc.js","piamateur-semailles":"./piamateur-semailles/piamateur-semailles.js","rillieux-village":"./rillieux-village/rillieux-village.js","velette":"./velette/velette.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
