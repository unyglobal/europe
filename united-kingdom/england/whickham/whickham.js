// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"whickham","repository":"europe","path":"united-kingdom/england/whickham","depth":3,"parent":"united-kingdom/england","children":["beechgrove"]});
export const childModules = Object.freeze({"beechgrove":"./beechgrove/beechgrove.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
