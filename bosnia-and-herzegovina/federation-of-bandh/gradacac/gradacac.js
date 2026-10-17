// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gradacac","repository":"europe","path":"bosnia-and-herzegovina/federation-of-bandh/gradacac","depth":3,"parent":"bosnia-and-herzegovina/federation-of-bandh","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
