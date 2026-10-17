// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hatfield","repository":"europe","path":"united-kingdom/england/hatfield","depth":3,"parent":"united-kingdom/england","children":["birchwood","roe-green"]});
export const childModules = Object.freeze({"birchwood":"./birchwood/birchwood.js","roe-green":"./roe-green/roe-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
