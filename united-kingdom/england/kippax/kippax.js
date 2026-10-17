// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kippax","repository":"europe","path":"united-kingdom/england/kippax","depth":3,"parent":"united-kingdom/england","children":["moor-gate","mount-pleasant"]});
export const childModules = Object.freeze({"moor-gate":"./moor-gate/moor-gate.js","mount-pleasant":"./mount-pleasant/mount-pleasant.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
