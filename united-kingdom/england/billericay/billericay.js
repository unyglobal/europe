// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"billericay","repository":"europe","path":"united-kingdom/england/billericay","depth":3,"parent":"united-kingdom/england","children":["gooseberry-green","sunnymede"]});
export const childModules = Object.freeze({"gooseberry-green":"./gooseberry-green/gooseberry-green.js","sunnymede":"./sunnymede/sunnymede.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
