// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adriano","repository":"europe","path":"italy/lombardy/adriano","depth":3,"parent":"italy/lombardy","children":["crescenzago","quartiere-adriano"]});
export const childModules = Object.freeze({"crescenzago":"./crescenzago/crescenzago.js","quartiere-adriano":"./quartiere-adriano/quartiere-adriano.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
