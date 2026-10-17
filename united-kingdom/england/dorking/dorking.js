// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dorking","repository":"europe","path":"united-kingdom/england/dorking","depth":3,"parent":"united-kingdom/england","children":["rose-hill"]});
export const childModules = Object.freeze({"rose-hill":"./rose-hill/rose-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
