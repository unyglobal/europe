// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"korce-county","repository":"europe","path":"albania/korce-county","depth":2,"parent":"albania","children":["korce","pogradec"]});
export const childModules = Object.freeze({"korce":"./korce/korce.js","pogradec":"./pogradec/pogradec.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
