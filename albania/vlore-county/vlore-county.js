// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vlore-county","repository":"europe","path":"albania/vlore-county","depth":2,"parent":"albania","children":["sarande","vlore"]});
export const childModules = Object.freeze({"sarande":"./sarande/sarande.js","vlore":"./vlore/vlore.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
