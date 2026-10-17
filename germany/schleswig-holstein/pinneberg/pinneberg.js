// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pinneberg","repository":"europe","path":"germany/schleswig-holstein/pinneberg","depth":3,"parent":"germany/schleswig-holstein","children":["pinneberg-mitte"]});
export const childModules = Object.freeze({"pinneberg-mitte":"./pinneberg-mitte/pinneberg-mitte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
