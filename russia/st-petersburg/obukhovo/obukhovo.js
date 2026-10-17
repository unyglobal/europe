// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"obukhovo","repository":"europe","path":"russia/st-petersburg/obukhovo","depth":3,"parent":"russia/st-petersburg","children":["novo-aleksandrovskaya-sloboda"]});
export const childModules = Object.freeze({"novo-aleksandrovskaya-sloboda":"./novo-aleksandrovskaya-sloboda/novo-aleksandrovskaya-sloboda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
