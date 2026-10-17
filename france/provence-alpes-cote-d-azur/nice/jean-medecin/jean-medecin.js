// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jean-medecin","repository":"europe","path":"france/provence-alpes-cote-d-azur/nice/jean-medecin","depth":4,"parent":"france/provence-alpes-cote-d-azur/nice","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
