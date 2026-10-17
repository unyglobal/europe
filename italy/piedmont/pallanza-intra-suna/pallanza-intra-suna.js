// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pallanza-intra-suna","repository":"europe","path":"italy/piedmont/pallanza-intra-suna","depth":3,"parent":"italy/piedmont","children":["intra"]});
export const childModules = Object.freeze({"intra":"./intra/intra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
