// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zabehlice","repository":"europe","path":"czechia/prague/zabehlice","depth":3,"parent":"czechia/prague","children":["zahradni-mesto"]});
export const childModules = Object.freeze({"zahradni-mesto":"./zahradni-mesto/zahradni-mesto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
