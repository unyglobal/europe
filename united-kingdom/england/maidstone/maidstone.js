// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maidstone","repository":"europe","path":"united-kingdom/england/maidstone","depth":3,"parent":"united-kingdom/england","children":["lower-fant","tovil"]});
export const childModules = Object.freeze({"lower-fant":"./lower-fant/lower-fant.js","tovil":"./tovil/tovil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
