// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stevenage","repository":"europe","path":"united-kingdom/england/stevenage","depth":3,"parent":"united-kingdom/england","children":["bedwell"]});
export const childModules = Object.freeze({"bedwell":"./bedwell/bedwell.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
