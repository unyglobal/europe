// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"siilinjarvi","repository":"europe","path":"finland/north-savo/siilinjarvi","depth":3,"parent":"finland/north-savo","children":["ahmo","kirkonmaki","paivarinne","raisala","siilinpaa","simonsalo"]});
export const childModules = Object.freeze({"ahmo":"./ahmo/ahmo.js","kirkonmaki":"./kirkonmaki/kirkonmaki.js","paivarinne":"./paivarinne/paivarinne.js","raisala":"./raisala/raisala.js","siilinpaa":"./siilinpaa/siilinpaa.js","simonsalo":"./simonsalo/simonsalo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
