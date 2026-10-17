// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"molise","repository":"europe","path":"italy/molise","depth":2,"parent":"italy","children":["campobasso","isernia","termoli"]});
export const childModules = Object.freeze({"campobasso":"./campobasso/campobasso.js","isernia":"./isernia/isernia.js","termoli":"./termoli/termoli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
