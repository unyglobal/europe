// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luton","repository":"europe","path":"united-kingdom/england/luton","depth":3,"parent":"united-kingdom/england","children":["park-town"]});
export const childModules = Object.freeze({"park-town":"./park-town/park-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
