// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"banbury","repository":"europe","path":"united-kingdom/england/banbury","depth":3,"parent":"united-kingdom/england","children":["neithrop"]});
export const childModules = Object.freeze({"neithrop":"./neithrop/neithrop.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
