// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-peninsula","repository":"europe","path":"iceland/southern-peninsula","depth":2,"parent":"iceland","children":["keflavik","reykjanesb-r"]});
export const childModules = Object.freeze({"keflavik":"./keflavik/keflavik.js","reykjanesb-r":"./reykjanesb-r/reykjanesb-r.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
