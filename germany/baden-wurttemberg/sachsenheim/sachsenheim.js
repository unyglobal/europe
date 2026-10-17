// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sachsenheim","repository":"europe","path":"germany/baden-wurttemberg/sachsenheim","depth":3,"parent":"germany/baden-wurttemberg","children":["gro-sachsenheim"]});
export const childModules = Object.freeze({"gro-sachsenheim":"./gro-sachsenheim/gro-sachsenheim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
