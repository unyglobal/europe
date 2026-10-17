// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jewish-autonomous-oblast","repository":"europe","path":"russia/jewish-autonomous-oblast","depth":2,"parent":"russia","children":["birobidzhan"]});
export const childModules = Object.freeze({"birobidzhan":"./birobidzhan/birobidzhan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
