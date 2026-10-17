// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mosta","repository":"europe","path":"malta/il-mosta/mosta","depth":3,"parent":"malta/il-mosta","children":["ta-mlit"]});
export const childModules = Object.freeze({"ta-mlit":"./ta-mlit/ta-mlit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
