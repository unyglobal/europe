// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vila-real","repository":"europe","path":"portugal/vila-real","depth":2,"parent":"portugal","children":["chaves"]});
export const childModules = Object.freeze({"chaves":"./chaves/chaves.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
