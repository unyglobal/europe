// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sale","repository":"europe","path":"united-kingdom/england/sale","depth":3,"parent":"united-kingdom/england","children":["ashton-upon-mersey"]});
export const childModules = Object.freeze({"ashton-upon-mersey":"./ashton-upon-mersey/ashton-upon-mersey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
