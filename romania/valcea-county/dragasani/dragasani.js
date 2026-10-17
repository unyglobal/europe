// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dragasani","repository":"europe","path":"romania/valcea-county/dragasani","depth":3,"parent":"romania/valcea-county","children":["curaresti","lunca-oltului","momotesti","schitu-manu"]});
export const childModules = Object.freeze({"curaresti":"./curaresti/curaresti.js","lunca-oltului":"./lunca-oltului/lunca-oltului.js","momotesti":"./momotesti/momotesti.js","schitu-manu":"./schitu-manu/schitu-manu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
