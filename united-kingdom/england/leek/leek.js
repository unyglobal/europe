// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leek","repository":"europe","path":"united-kingdom/england/leek","depth":3,"parent":"united-kingdom/england","children":["barnfields"]});
export const childModules = Object.freeze({"barnfields":"./barnfields/barnfields.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
