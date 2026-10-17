// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-barthelemy","repository":"europe","path":"france/provence-alpes-cote-d-azur/saint-barthelemy","depth":3,"parent":"france/provence-alpes-cote-d-azur","children":["le-merlan","sainte-marthe"]});
export const childModules = Object.freeze({"le-merlan":"./le-merlan/le-merlan.js","sainte-marthe":"./sainte-marthe/sainte-marthe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
