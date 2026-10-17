// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"washwood-heath","repository":"europe","path":"united-kingdom/england/washwood-heath","depth":3,"parent":"united-kingdom/england","children":["bromford","ward-end"]});
export const childModules = Object.freeze({"bromford":"./bromford/bromford.js","ward-end":"./ward-end/ward-end.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
