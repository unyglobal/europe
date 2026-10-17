// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burton-upon-trent","repository":"europe","path":"united-kingdom/england/burton-upon-trent","depth":3,"parent":"united-kingdom/england","children":["little-burton"]});
export const childModules = Object.freeze({"little-burton":"./little-burton/little-burton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
