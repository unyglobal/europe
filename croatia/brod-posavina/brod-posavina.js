// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brod-posavina","repository":"europe","path":"croatia/brod-posavina","depth":2,"parent":"croatia","children":["slavonski-brod"]});
export const childModules = Object.freeze({"slavonski-brod":"./slavonski-brod/slavonski-brod.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
