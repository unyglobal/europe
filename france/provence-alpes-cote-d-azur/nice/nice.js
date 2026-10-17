// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nice","repository":"europe","path":"france/provence-alpes-cote-d-azur/nice","depth":3,"parent":"france/provence-alpes-cote-d-azur","children":["jean-medecin","thiers","vernier"]});
export const childModules = Object.freeze({"jean-medecin":"./jean-medecin/jean-medecin.js","thiers":"./thiers/thiers.js","vernier":"./vernier/vernier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
