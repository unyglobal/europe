// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"espoo","repository":"europe","path":"finland/uusimaa/espoo","depth":3,"parent":"finland/uusimaa","children":["espoon-keskus","kiltakallio"]});
export const childModules = Object.freeze({"espoon-keskus":"./espoon-keskus/espoon-keskus.js","kiltakallio":"./kiltakallio/kiltakallio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
