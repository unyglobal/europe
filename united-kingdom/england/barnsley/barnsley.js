// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barnsley","repository":"europe","path":"united-kingdom/england/barnsley","depth":3,"parent":"united-kingdom/england","children":["shaw-lands"]});
export const childModules = Object.freeze({"shaw-lands":"./shaw-lands/shaw-lands.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
