// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ilford","repository":"europe","path":"united-kingdom/england/ilford","depth":3,"parent":"united-kingdom/england","children":["clementswood"]});
export const childModules = Object.freeze({"clementswood":"./clementswood/clementswood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
