// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hyvinge","repository":"europe","path":"finland/uusimaa/hyvinge","depth":3,"parent":"finland/uusimaa","children":["parantola","raakanpaa","tehdas"]});
export const childModules = Object.freeze({"parantola":"./parantola/parantola.js","raakanpaa":"./raakanpaa/raakanpaa.js","tehdas":"./tehdas/tehdas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
