// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boulogne-sur-mer","repository":"europe","path":"france/hauts-de-france/boulogne-sur-mer","depth":3,"parent":"france/hauts-de-france","children":["ville-haute"]});
export const childModules = Object.freeze({"ville-haute":"./ville-haute/ville-haute.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
