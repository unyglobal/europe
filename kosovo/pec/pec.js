// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pec","repository":"europe","path":"kosovo/pec","depth":2,"parent":"kosovo","children":["istok","peje"]});
export const childModules = Object.freeze({"istok":"./istok/istok.js","peje":"./peje/peje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
