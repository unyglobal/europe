// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vysocina","repository":"europe","path":"czechia/vysocina","depth":2,"parent":"czechia","children":["havlickuv-brod","jihlava","pelhrimov","trebic","zdar-nad-sazavou"]});
export const childModules = Object.freeze({"havlickuv-brod":"./havlickuv-brod/havlickuv-brod.js","jihlava":"./jihlava/jihlava.js","pelhrimov":"./pelhrimov/pelhrimov.js","trebic":"./trebic/trebic.js","zdar-nad-sazavou":"./zdar-nad-sazavou/zdar-nad-sazavou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
