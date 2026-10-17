// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rethymno","repository":"europe","path":"greece/crete/rethymno","depth":3,"parent":"greece/crete","children":["kallithea","mastampas","palia-poli-rethymnou"]});
export const childModules = Object.freeze({"kallithea":"./kallithea/kallithea.js","mastampas":"./mastampas/mastampas.js","palia-poli-rethymnou":"./palia-poli-rethymnou/palia-poli-rethymnou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
