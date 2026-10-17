// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valcea-county","repository":"europe","path":"romania/valcea-county","depth":2,"parent":"romania","children":["dragasani","ramnicu-valcea"]});
export const childModules = Object.freeze({"dragasani":"./dragasani/dragasani.js","ramnicu-valcea":"./ramnicu-valcea/ramnicu-valcea.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
