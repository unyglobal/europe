// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wigston-magna","repository":"europe","path":"united-kingdom/england/wigston-magna","depth":3,"parent":"united-kingdom/england","children":["wigston-harcourt"]});
export const childModules = Object.freeze({"wigston-harcourt":"./wigston-harcourt/wigston-harcourt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
