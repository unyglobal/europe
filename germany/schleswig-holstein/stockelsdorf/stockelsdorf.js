// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stockelsdorf","repository":"europe","path":"germany/schleswig-holstein/stockelsdorf","depth":3,"parent":"germany/schleswig-holstein","children":["lilienkuhl"]});
export const childModules = Object.freeze({"lilienkuhl":"./lilienkuhl/lilienkuhl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
