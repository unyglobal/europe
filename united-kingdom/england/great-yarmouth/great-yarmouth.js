// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"great-yarmouth","repository":"europe","path":"united-kingdom/england/great-yarmouth","depth":3,"parent":"united-kingdom/england","children":["cobholm-island"]});
export const childModules = Object.freeze({"cobholm-island":"./cobholm-island/cobholm-island.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
