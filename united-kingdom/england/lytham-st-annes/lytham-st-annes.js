// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lytham-st-annes","repository":"europe","path":"united-kingdom/england/lytham-st-annes","depth":3,"parent":"united-kingdom/england","children":["ansdell","fairhaven"]});
export const childModules = Object.freeze({"ansdell":"./ansdell/ansdell.js","fairhaven":"./fairhaven/fairhaven.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
