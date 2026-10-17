// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wath-upon-dearne","repository":"europe","path":"united-kingdom/england/wath-upon-dearne","depth":3,"parent":"united-kingdom/england","children":["manvers"]});
export const childModules = Object.freeze({"manvers":"./manvers/manvers.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
