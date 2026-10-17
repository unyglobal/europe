// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"march","repository":"europe","path":"united-kingdom/england/march","depth":3,"parent":"united-kingdom/england","children":["little-london"]});
export const childModules = Object.freeze({"little-london":"./little-london/little-london.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
