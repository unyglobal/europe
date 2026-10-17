// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kilmarnock","repository":"europe","path":"united-kingdom/scotland/kilmarnock","depth":3,"parent":"united-kingdom/scotland","children":["altonhill","grange","hillhead"]});
export const childModules = Object.freeze({"altonhill":"./altonhill/altonhill.js","grange":"./grange/grange.js","hillhead":"./hillhead/hillhead.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
