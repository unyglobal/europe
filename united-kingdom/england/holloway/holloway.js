// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"holloway","repository":"europe","path":"united-kingdom/england/holloway","depth":3,"parent":"united-kingdom/england","children":["north-london"]});
export const childModules = Object.freeze({"north-london":"./north-london/north-london.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
