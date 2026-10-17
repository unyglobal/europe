// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"darnytsya","repository":"europe","path":"ukraine/kyiv-city/darnytsya","depth":3,"parent":"ukraine/kyiv-city","children":["rembaza"]});
export const childModules = Object.freeze({"rembaza":"./rembaza/rembaza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
