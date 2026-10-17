// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muswell-hill","repository":"europe","path":"united-kingdom/england/muswell-hill","depth":3,"parent":"united-kingdom/england","children":["cranley-gardens"]});
export const childModules = Object.freeze({"cranley-gardens":"./cranley-gardens/cranley-gardens.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
