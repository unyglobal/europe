// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shrewsbury","repository":"europe","path":"united-kingdom/england/shrewsbury","depth":3,"parent":"united-kingdom/england","children":["castlefields","coleham"]});
export const childModules = Object.freeze({"castlefields":"./castlefields/castlefields.js","coleham":"./coleham/coleham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
