// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kelkheim","repository":"europe","path":"germany/hesse/kelkheim","depth":3,"parent":"germany/hesse","children":["kelkheim-mitte"]});
export const childModules = Object.freeze({"kelkheim-mitte":"./kelkheim-mitte/kelkheim-mitte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
