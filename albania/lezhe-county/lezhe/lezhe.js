// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lezhe","repository":"europe","path":"albania/lezhe-county/lezhe","depth":3,"parent":"albania/lezhe-county","children":["mal-i-kakariqit"]});
export const childModules = Object.freeze({"mal-i-kakariqit":"./mal-i-kakariqit/mal-i-kakariqit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
