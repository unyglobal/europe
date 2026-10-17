// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bernau-bei-berlin","repository":"europe","path":"germany/brandenburg/bernau-bei-berlin","depth":3,"parent":"germany/brandenburg","children":["blumenhag","puschkinviertel","rutenfeld"]});
export const childModules = Object.freeze({"blumenhag":"./blumenhag/blumenhag.js","puschkinviertel":"./puschkinviertel/puschkinviertel.js","rutenfeld":"./rutenfeld/rutenfeld.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
