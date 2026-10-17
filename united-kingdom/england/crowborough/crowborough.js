// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"crowborough","repository":"europe","path":"united-kingdom/england/crowborough","depth":3,"parent":"united-kingdom/england","children":["crowborough-warren"]});
export const childModules = Object.freeze({"crowborough-warren":"./crowborough-warren/crowborough-warren.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
