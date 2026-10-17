// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-fons","repository":"europe","path":"france/auvergne-rhone-alpes/saint-fons","depth":3,"parent":"france/auvergne-rhone-alpes","children":["arsenal","centre-ouest"]});
export const childModules = Object.freeze({"arsenal":"./arsenal/arsenal.js","centre-ouest":"./centre-ouest/centre-ouest.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
