// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"horsham","repository":"europe","path":"united-kingdom/england/horsham","depth":3,"parent":"united-kingdom/england","children":["the-common"]});
export const childModules = Object.freeze({"the-common":"./the-common/the-common.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
