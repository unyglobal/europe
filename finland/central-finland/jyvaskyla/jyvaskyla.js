// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jyvaskyla","repository":"europe","path":"finland/central-finland/jyvaskyla","depth":3,"parent":"finland/central-finland","children":["kortepohja","kortesuo","maki-matti","savela"]});
export const childModules = Object.freeze({"kortepohja":"./kortepohja/kortepohja.js","kortesuo":"./kortesuo/kortesuo.js","maki-matti":"./maki-matti/maki-matti.js","savela":"./savela/savela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
