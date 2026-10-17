// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stuttgart-ost","repository":"europe","path":"germany/baden-wurttemberg/stuttgart-ost","depth":3,"parent":"germany/baden-wurttemberg","children":["gaisburg","ostheim"]});
export const childModules = Object.freeze({"gaisburg":"./gaisburg/gaisburg.js","ostheim":"./ostheim/ostheim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
