// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-pol-sur-mer","repository":"europe","path":"france/hauts-de-france/saint-pol-sur-mer","depth":3,"parent":"france/hauts-de-france","children":["cite-des-cheminots"]});
export const childModules = Object.freeze({"cite-des-cheminots":"./cite-des-cheminots/cite-des-cheminots.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
