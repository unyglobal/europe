// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"enfield-lock","repository":"europe","path":"united-kingdom/england/enfield-lock","depth":3,"parent":"united-kingdom/england","children":["enfield-island-village","freezy-water"]});
export const childModules = Object.freeze({"enfield-island-village":"./enfield-island-village/enfield-island-village.js","freezy-water":"./freezy-water/freezy-water.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
