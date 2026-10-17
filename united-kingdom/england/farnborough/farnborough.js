// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"farnborough","repository":"europe","path":"united-kingdom/england/farnborough","depth":3,"parent":"united-kingdom/england","children":["farnborough-park"]});
export const childModules = Object.freeze({"farnborough-park":"./farnborough-park/farnborough-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
