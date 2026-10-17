// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tuzla","repository":"europe","path":"bosnia-and-herzegovina/federation-of-bandh/tuzla","depth":3,"parent":"bosnia-and-herzegovina/federation-of-bandh","children":["dragodol","tusanj"]});
export const childModules = Object.freeze({"dragodol":"./dragodol/dragodol.js","tusanj":"./tusanj/tusanj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
