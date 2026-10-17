// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dour","repository":"europe","path":"belgium/wallonia/dour","depth":3,"parent":"belgium/wallonia","children":["petit-hainin"]});
export const childModules = Object.freeze({"petit-hainin":"./petit-hainin/petit-hainin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
