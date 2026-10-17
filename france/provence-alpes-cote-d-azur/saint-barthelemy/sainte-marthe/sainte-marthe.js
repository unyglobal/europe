// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sainte-marthe","repository":"europe","path":"france/provence-alpes-cote-d-azur/saint-barthelemy/sainte-marthe","depth":4,"parent":"france/provence-alpes-cote-d-azur/saint-barthelemy","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
