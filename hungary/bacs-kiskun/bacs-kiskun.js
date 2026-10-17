// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bacs-kiskun","repository":"europe","path":"hungary/bacs-kiskun","depth":2,"parent":"hungary","children":["baja","kalocsa","kecskemet","kiskoros","kiskunfelegyhaza","kiskunhalas"]});
export const childModules = Object.freeze({"baja":"./baja/baja.js","kalocsa":"./kalocsa/kalocsa.js","kecskemet":"./kecskemet/kecskemet.js","kiskoros":"./kiskoros/kiskoros.js","kiskunfelegyhaza":"./kiskunfelegyhaza/kiskunfelegyhaza.js","kiskunhalas":"./kiskunhalas/kiskunhalas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
