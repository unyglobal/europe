// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"market-harborough","repository":"europe","path":"united-kingdom/england/market-harborough","depth":3,"parent":"united-kingdom/england","children":["little-bowden"]});
export const childModules = Object.freeze({"little-bowden":"./little-bowden/little-bowden.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
