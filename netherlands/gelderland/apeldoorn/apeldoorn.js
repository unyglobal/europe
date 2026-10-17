// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"apeldoorn","repository":"europe","path":"netherlands/gelderland/apeldoorn","depth":3,"parent":"netherlands/gelderland","children":["binnenstad","brummelhof","de-haven","matenhoek","welgelegen"]});
export const childModules = Object.freeze({"binnenstad":"./binnenstad/binnenstad.js","brummelhof":"./brummelhof/brummelhof.js","de-haven":"./de-haven/de-haven.js","matenhoek":"./matenhoek/matenhoek.js","welgelegen":"./welgelegen/welgelegen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
