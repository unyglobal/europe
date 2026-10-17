// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dunstable","repository":"europe","path":"united-kingdom/england/dunstable","depth":3,"parent":"united-kingdom/england","children":["california"]});
export const childModules = Object.freeze({"california":"./california/california.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
