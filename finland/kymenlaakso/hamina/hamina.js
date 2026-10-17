// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamina","repository":"europe","path":"finland/kymenlaakso/hamina","depth":3,"parent":"finland/kymenlaakso","children":["etusaari","hietakyla","lepikko","meltti"]});
export const childModules = Object.freeze({"etusaari":"./etusaari/etusaari.js","hietakyla":"./hietakyla/hietakyla.js","lepikko":"./lepikko/lepikko.js","meltti":"./meltti/meltti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
