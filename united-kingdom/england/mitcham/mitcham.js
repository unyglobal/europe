// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mitcham","repository":"europe","path":"united-kingdom/england/mitcham","depth":3,"parent":"united-kingdom/england","children":["cricket-green"]});
export const childModules = Object.freeze({"cricket-green":"./cricket-green/cricket-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
