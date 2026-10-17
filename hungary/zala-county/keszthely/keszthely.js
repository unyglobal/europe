// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keszthely","repository":"europe","path":"hungary/zala-county/keszthely","depth":3,"parent":"hungary/zala-county","children":["goldmarkdulo","katranyos","kofejto","kozepsomalom","tozegtelep"]});
export const childModules = Object.freeze({"goldmarkdulo":"./goldmarkdulo/goldmarkdulo.js","katranyos":"./katranyos/katranyos.js","kofejto":"./kofejto/kofejto.js","kozepsomalom":"./kozepsomalom/kozepsomalom.js","tozegtelep":"./tozegtelep/tozegtelep.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
