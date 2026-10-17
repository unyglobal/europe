// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basildon","repository":"europe","path":"united-kingdom/england/basildon","depth":3,"parent":"united-kingdom/england","children":["ghyllgrove","kingswood","lee-chapel-south"]});
export const childModules = Object.freeze({"ghyllgrove":"./ghyllgrove/ghyllgrove.js","kingswood":"./kingswood/kingswood.js","lee-chapel-south":"./lee-chapel-south/lee-chapel-south.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
