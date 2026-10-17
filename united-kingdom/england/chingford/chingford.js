// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chingford","repository":"europe","path":"united-kingdom/england/chingford","depth":3,"parent":"united-kingdom/england","children":["chingford-green","endlebury"]});
export const childModules = Object.freeze({"chingford-green":"./chingford-green/chingford-green.js","endlebury":"./endlebury/endlebury.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
