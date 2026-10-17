// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pieksamaki","repository":"europe","path":"finland/south-savo/pieksamaki","depth":3,"parent":"finland/south-savo","children":["lansirinne","pappilanmaki","viljelys","ylaristi"]});
export const childModules = Object.freeze({"lansirinne":"./lansirinne/lansirinne.js","pappilanmaki":"./pappilanmaki/pappilanmaki.js","viljelys":"./viljelys/viljelys.js","ylaristi":"./ylaristi/ylaristi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
