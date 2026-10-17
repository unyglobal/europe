// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"deuil-la-barre","repository":"europe","path":"france/ile-de-france/deuil-la-barre","depth":3,"parent":"france/ile-de-france","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
