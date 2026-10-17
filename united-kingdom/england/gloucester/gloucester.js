// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gloucester","repository":"europe","path":"united-kingdom/england/gloucester","depth":3,"parent":"united-kingdom/england","children":["high-orchard","kingsholm","the-island"]});
export const childModules = Object.freeze({"high-orchard":"./high-orchard/high-orchard.js","kingsholm":"./kingsholm/kingsholm.js","the-island":"./the-island/the-island.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
