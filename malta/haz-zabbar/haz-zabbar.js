// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haz-zabbar","repository":"europe","path":"malta/haz-zabbar","depth":2,"parent":"malta","children":["zabbar"]});
export const childModules = Object.freeze({"zabbar":"./zabbar/zabbar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
