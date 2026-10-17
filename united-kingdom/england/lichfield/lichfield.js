// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lichfield","repository":"europe","path":"united-kingdom/england/lichfield","depth":3,"parent":"united-kingdom/england","children":["christ-church","stowe"]});
export const childModules = Object.freeze({"christ-church":"./christ-church/christ-church.js","stowe":"./stowe/stowe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
