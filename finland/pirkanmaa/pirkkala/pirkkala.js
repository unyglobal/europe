// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pirkkala","repository":"europe","path":"finland/pirkanmaa/pirkkala","depth":3,"parent":"finland/pirkanmaa","children":["huovi","lepomoisio","niemenmaa"]});
export const childModules = Object.freeze({"huovi":"./huovi/huovi.js","lepomoisio":"./lepomoisio/lepomoisio.js","niemenmaa":"./niemenmaa/niemenmaa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
