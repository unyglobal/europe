// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nelson","repository":"europe","path":"united-kingdom/england/nelson","depth":3,"parent":"united-kingdom/england","children":["bradley"]});
export const childModules = Object.freeze({"bradley":"./bradley/bradley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
