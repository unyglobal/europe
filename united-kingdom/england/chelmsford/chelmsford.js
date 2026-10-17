// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chelmsford","repository":"europe","path":"united-kingdom/england/chelmsford","depth":3,"parent":"united-kingdom/england","children":["moulsham"]});
export const childModules = Object.freeze({"moulsham":"./moulsham/moulsham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
