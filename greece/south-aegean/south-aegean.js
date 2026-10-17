// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-aegean","repository":"europe","path":"greece/south-aegean","depth":2,"parent":"greece","children":["kos","rhodes"]});
export const childModules = Object.freeze({"kos":"./kos/kos.js","rhodes":"./rhodes/rhodes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
