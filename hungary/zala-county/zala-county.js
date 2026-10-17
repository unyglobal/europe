// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zala-county","repository":"europe","path":"hungary/zala-county","depth":2,"parent":"hungary","children":["keszthely","nagykanizsa","zalaegerszeg"]});
export const childModules = Object.freeze({"keszthely":"./keszthely/keszthely.js","nagykanizsa":"./nagykanizsa/nagykanizsa.js","zalaegerszeg":"./zalaegerszeg/zalaegerszeg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
