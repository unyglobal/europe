// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"woodford-green","repository":"europe","path":"united-kingdom/england/woodford-green","depth":3,"parent":"united-kingdom/england","children":["monkhams","woodford-wells"]});
export const childModules = Object.freeze({"monkhams":"./monkhams/monkhams.js","woodford-wells":"./woodford-wells/woodford-wells.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
