// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arges","repository":"europe","path":"romania/arges","depth":2,"parent":"romania","children":["curtea-de-arges","mioveni","pitesti"]});
export const childModules = Object.freeze({"curtea-de-arges":"./curtea-de-arges/curtea-de-arges.js","mioveni":"./mioveni/mioveni.js","pitesti":"./pitesti/pitesti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
