// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lezhe-county","repository":"europe","path":"albania/lezhe-county","depth":2,"parent":"albania","children":["lezhe"]});
export const childModules = Object.freeze({"lezhe":"./lezhe/lezhe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
