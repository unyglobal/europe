// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nether-edge","repository":"europe","path":"united-kingdom/england/nether-edge","depth":3,"parent":"united-kingdom/england","children":["carter-knowle","norton-hammer","sharrow"]});
export const childModules = Object.freeze({"carter-knowle":"./carter-knowle/carter-knowle.js","norton-hammer":"./norton-hammer/norton-hammer.js","sharrow":"./sharrow/sharrow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
