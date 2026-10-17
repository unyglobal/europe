// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"widnes","repository":"europe","path":"united-kingdom/england/widnes","depth":3,"parent":"united-kingdom/england","children":["kingsway","simm-s-cross"]});
export const childModules = Object.freeze({"kingsway":"./kingsway/kingsway.js","simm-s-cross":"./simm-s-cross/simm-s-cross.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
