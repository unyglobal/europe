// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lapland","repository":"europe","path":"finland/lapland","depth":2,"parent":"finland","children":["kemi","rovaniemi","tornio"]});
export const childModules = Object.freeze({"kemi":"./kemi/kemi.js","rovaniemi":"./rovaniemi/rovaniemi.js","tornio":"./tornio/tornio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
