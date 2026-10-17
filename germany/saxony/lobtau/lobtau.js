// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lobtau","repository":"europe","path":"germany/saxony/lobtau","depth":3,"parent":"germany/saxony","children":["lobtau-nord","lobtau-sud"]});
export const childModules = Object.freeze({"lobtau-nord":"./lobtau-nord/lobtau-nord.js","lobtau-sud":"./lobtau-sud/lobtau-sud.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
