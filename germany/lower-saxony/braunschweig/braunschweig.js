// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"braunschweig","repository":"europe","path":"germany/lower-saxony/braunschweig","depth":3,"parent":"germany/lower-saxony","children":["altes-hochschulviertel","altewiek","stadtkern"]});
export const childModules = Object.freeze({"altes-hochschulviertel":"./altes-hochschulviertel/altes-hochschulviertel.js","altewiek":"./altewiek/altewiek.js","stadtkern":"./stadtkern/stadtkern.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
