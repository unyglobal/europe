// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"enfield-town","repository":"europe","path":"united-kingdom/england/enfield-town","depth":3,"parent":"united-kingdom/england","children":["grange","the-ridgeway"]});
export const childModules = Object.freeze({"grange":"./grange/grange.js","the-ridgeway":"./the-ridgeway/the-ridgeway.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
