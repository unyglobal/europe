// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rickmansworth","repository":"europe","path":"united-kingdom/england/rickmansworth","depth":3,"parent":"united-kingdom/england","children":["moneyhill"]});
export const childModules = Object.freeze({"moneyhill":"./moneyhill/moneyhill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
