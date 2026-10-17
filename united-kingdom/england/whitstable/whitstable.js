// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"whitstable","repository":"europe","path":"united-kingdom/england/whitstable","depth":3,"parent":"united-kingdom/england","children":["lower-island","thurston-park"]});
export const childModules = Object.freeze({"lower-island":"./lower-island/lower-island.js","thurston-park":"./thurston-park/thurston-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
